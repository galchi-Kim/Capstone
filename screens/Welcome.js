import React from 'react';
import { View, Text, Image, TouchableOpacity, PermissionsAndroid, Platform, Alert } from 'react-native';
import styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';

const Container = styled.View`
  flex: 1;
  background-color: #FFFCAF;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #434343;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #fff000;
  padding: 15px 30px;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const Welcome = ({ navigation, route }) => {
  const { userName, userRole, userImg } = route.params;

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn('권한 요청 실패:', err);
        return false;
      }
    }
    return true;
  };

  const handleClassSelect = async () => {
    const granted = await requestLocationPermission();

    if (!granted) {
      // 권한 거부 시 그냥 이동
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'TabNavigator',
            params: { userName, userRole, userImg },
          },
        ],
      });
      return;
    }

    // 권한 허용 → 위치 요청
    Geolocation.getCurrentPosition(
      position => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'TabNavigator',
              params: {
                userName,
                userRole,
                userImg,
                location: position.coords,
              },
            },
          ],
        });
      },
      error => {
        console.warn('위치 정보 실패:', error.message);
        Alert.alert('위치 정보를 가져올 수 없습니다.', '위치 기능이 꺼져 있거나 실패했습니다.');
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'TabNavigator',
              params: { userName, userRole, userImg },
            },
          ],
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
        showLocationDialog: true,
      }
    );
  };

  return (
    <Container>
      <Title>{userName}님, 환영합니다!</Title>
      <Image
        source={{ uri: userImg }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
      />
      <StyledButton onPress={handleClassSelect}>
        <ButtonText>클래스 선택하기</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Welcome;
