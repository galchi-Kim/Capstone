import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const MyProfileEdit = ({ route }) => {
  const navigation = useNavigation();
  const { userName: initialName, userEmail: initialEmail, profileImage: initialImage = null } = route.params || {};

  const [name, setName] = useState(initialName || '');
  const [email, setEmail] = useState(initialEmail || '');
  const [profileImage, setProfileImage] = useState(initialImage);

  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setProfileImage(response.assets[0].uri);
        }
      }
    );
  };

  const handleSave = () => {
    console.log('저장:', { name, email, profileImage });
    navigation.goBack();
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFFFFF', // 흰 배경
      justifyContent: 'center',
      paddingHorizontal: 20
    }}>
      {/* 사진 + 수강생 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
      }}>
        <TouchableOpacity
          onPress={handleImagePick}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f9f9f9'
          }}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ) : (
            <Text style={{ color: '#999', fontSize: 14 }}>사진 선택</Text>
          )}
        </TouchableOpacity>

        <View style={{
          backgroundColor: '#fff000',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 4,
          marginLeft: 20
        }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>수강생</Text>
        </View>
      </View>

      {/* 이름 입력 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', width: 60 }}>이름:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
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

      {/* 이메일 입력 */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', width: 60 }}>이메일:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
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

export default MyProfileEdit;
