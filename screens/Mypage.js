import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { LessonDetailContainer } from '../components/styles';
import { useNavigation } from '@react-navigation/native';

const Mypage = ({ route }) => {
  const navigation = useNavigation();
  const { userName, userEmail, userAge = '25', profileImage = null } = route.params || {};

  return (
    <LessonDetailContainer>
      {/* 상단 헤더 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 0
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 18, marginRight: 10 }}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>마이홈</Text>
      </View>

      {/* 프로필 사진 + 정보 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20
      }}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../assets/img/person1.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        <View style={{ marginLeft: 20, justifyContent: 'space-between' }}>
          {/* 수강생 박스 */}
          <View style={{
            backgroundColor: '#fff000',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 4,
            alignSelf: 'flex-start',
            marginBottom: 10
          }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>수강생</Text>
          </View>

          {/* 이름과 나이 박스 (각각) */}
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginRight: 10
            }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{userName}</Text>
            </View>
            <View style={{
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5
            }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{userAge}세</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 리뷰관리 / 프로필 수정 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        paddingHorizontal: 20
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('ReviewManage')}>
          <Text style={{ marginRight: 30, fontSize: 16, fontWeight: 'bold', color: '#000' }}>
            리뷰 관리
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfileEdit', {
          userName,
          userEmail
        })}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
            프로필 수정
          </Text>
        </TouchableOpacity>
      </View>

      {/* 회원 정보 섹션 */}
      <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>회원 정보</Text>

        <View style={{
          backgroundColor: '#f2f2f2',
          borderRadius: 10,
          padding: 15
        }}>
          {/* 비밀번호 변경 + 로그아웃 */}
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword', { userEmail })}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginRight: 40 }}>
                비밀번호 변경
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                로그아웃
              </Text>
            </TouchableOpacity>
          </View>

          {/* 회원 탈퇴 */}
          <TouchableOpacity
            onPress={() => {
              Alert.alert('회원 탈퇴', '정말 탈퇴하시겠습니까?', [
                { text: '취소' },
                {
                  text: '확인',
                  onPress: () => {
                    console.log('회원 탈퇴 요청:', userEmail);
                    navigation.replace('Login');
                  }
                }
              ]);
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>회원 탈퇴</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 결제수단 섹션 */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>결제수단</Text>

        <View style={{
          backgroundColor: '#f2f2f2',
          borderRadius: 10,
          padding: 15
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentHistory')}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>결제 내역</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LessonDetailContainer>
  );
};

export default Mypage;
