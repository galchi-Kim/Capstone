import React from 'react';
import { StatusBar, View } from 'react-native';

import {  
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    LogoutButton,
} from './../components/styles';

const Welcome = ({ navigation, route }) => {
    const { userName, userEmail } = route.params || {};

    return (
        <StyledContainer>
            <StatusBar barStyle="dark-content" />
            <InnerContainer>
                <PageTitle>환영합니다!</PageTitle>
                <SubTitle>{userName} 님</SubTitle>
                <SubTitle>{userEmail}</SubTitle>

                <StyledFormArea>
                    <LogoutButton onPress={() => navigation.replace("Login")}>
                        <ButtonText>로그아웃</ButtonText> 
                    </LogoutButton>

                    <View style={{ height: 20 }} />
                    <StyledButton onPress={() => navigation.navigate("TabNavigator")}>
                        <ButtonText>클래스 선택하기</ButtonText> 
                    </StyledButton>

                    <View style={{ height: 20 }} />
                    <StyledButton onPress={() => navigation.navigate("Mypage", {
                        userEmail: userEmail // 비밀번호 변경 위해 이메일 넘김
                    })}>
                        <ButtonText>마이페이지</ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Welcome;
