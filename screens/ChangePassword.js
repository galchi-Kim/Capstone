import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();

  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const handleSave = () => {
    if (!currentPw || !newPw || !confirmPw) {
      Alert.alert('입력 오류', '모든 항목을 입력해주세요.');
      return;
    }
    if (newPw !== confirmPw) {
      Alert.alert('비밀번호 불일치', '새 비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('비밀번호 변경:', { currentPw, newPw });
    Alert.alert('완료', '비밀번호가 변경되었습니다.');
    navigation.goBack();
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFFFFF', // 흰 배경
      justifyContent: 'center',
      paddingHorizontal: 20
    }}>
      {/* 현재 비밀번호 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', width: 110 }}>현재 비밀번호:</Text>
        <TextInput
          value={currentPw}
          onChangeText={setCurrentPw}
          secureTextEntry
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#fff'
          }}
        />
      </View>

      {/* 새 비밀번호 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', width: 110 }}>새 비밀번호:</Text>
        <TextInput
          value={newPw}
          onChangeText={setNewPw}
          secureTextEntry
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#fff'
          }}
        />
      </View>

      {/* 새 비밀번호 확인 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', width: 110 }}>비밀번호 확인:</Text>
        <TextInput
          value={confirmPw}
          onChangeText={setConfirmPw}
          secureTextEntry
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#fff'
          }}
        />
      </View>

      {/* 버튼 영역 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#ddd',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10,
            flex: 1,
            marginRight: 10,
            alignItems: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold', color: '#000' }}>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: '#FFF000',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10,
            flex: 1,
            marginLeft: 10,
            alignItems: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold', color: '#000' }}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
