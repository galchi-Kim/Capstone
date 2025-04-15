import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #FFFCAF;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
`;

const Button = styled.TouchableOpacity`
  background-color: #fff000;
  padding: 15px;
  width: 80%;
  border-radius: 10px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    if (email === 'test@test.com' && pw === '1234') {
      navigation.reset({
        index: 0,
        routes: [{
          name: 'Welcome',
          params: {
            userName: '홍길동',
            userRole: '수강생',
            userImg: 'http://10.32.10.126:3000/img/person1.png',
          },
        }],
      });
    } else {
      Alert.alert('로그인 실패', '이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleTempLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{
        name: 'Welcome',
        params: {
          userName: '임시유저',
          userRole: '수강생',
          userImg: 'http://10.32.10.126:3000/img/person1.png',
        },
      }],
    });
  };

  return (
    <Container>
      <Input
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="비밀번호"
        value={pw}
        onChangeText={setPw}
        secureTextEntry
      />
      <Button onPress={handleLogin}>
        <ButtonText>로그인</ButtonText>
      </Button>
      <Button onPress={handleTempLogin}>
        <ButtonText>임시 로그인</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
// import { Formik } from "formik";
// import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
// //카카오 로그인 함수
// import { login, logout, getProfile as getKakaoProfile, shippingAddresses as getKakaoShippingAddresses, unlink } from "@react-native-seoul/kakao-login";
// import axios from 'axios'; 

// import {  
//     StyledContainer,
//     InnerContainer,
//     PageLogo,
//     PageTitle,
//     SubTitle,
//     StyledFormArea,
//     StyledInputLabel,
//     StyledTextInput,
//     StyledButton,
//     ButtonText,
//     Colors,
//     TextLink,
//     TextLinkContent,
//     TextLink2,
//     TextLinkContent2,
//     LoginButton,
// } from "../components/styles";
// const { exTextColor } = Colors;

// const Login = ({ navigation }) => {
//     const [result, setResult] = useState(""); //로그인 결과 상태 처리
//     const [loginError, setLoginError] = useState(false);

//     //카카오 로그인 처리 함수
//     const signInWithKakao = async () => { 
//         try {
//             const token = await login();
//             setResult(JSON.stringify(token)); // 로그인 성공 시 토큰 저장
//             console.log("login success ", token.accessToken);
//         } catch (err) {
//             console.error("login err", err);
//         }
//     };

//     return (
//         <KeyboardAvoidingWrapper>
//             <StyledContainer>
//                 <StatusBar barStyle="dark-content" />

//                 {/*회원가입 링크*/}
//                     <TextLink onPress={() => navigation.navigate("Signup")}>
//                     <TextLinkContent>회원가입</TextLinkContent>
//                     </TextLink>

//                 {/*강사 로그인 링크*/}
//                 <TextLink2 onPress={() => navigation.replace("Logininst")}>
//                     <TextLinkContent2>강사 로그인</TextLinkContent2>
//                     </TextLink2>

//                 <InnerContainer>
//                     <PageLogo resizeMode="cover" source={require("../assets/img/logo.png")} />
//                     <PageTitle>파크골프ON</PageTitle>

//                     <SubTitle>회원 로그인</SubTitle>

//                     {/* 카카오 로그인 버튼 */}
//                     <Pressable style={styles.button} onPress={signInWithKakao}>
//                         <Text style={styles.text}>카카오 로그인</Text>
//                         </Pressable>

//                     {/*이메일, 비밀번호 로그인 폼 */}
//                     <Formik
//                         initialValues={{ email: "", password: "" }}
//                         onSubmit={(values) => {
//                             axios.post('http://10.0.2.2:5000/api/login', {
//                                 userEmail: values.email,
//                                 userPw: values.password
//                             })
//                             .then(res => {
//                                 if (res.data.success) {
//                                     setLoginError(false); // 에러 메시지 숨김
//                                     console.log('로그인 성공:', res.data.user);
//                                     navigation.navigate("Welcome", {
//                                         userName: res.data.user.userName,
//                                         userEmail: res.data.user.userEmail,
//                                     });
//                                 }
//                             })
//                             .catch(err => {
//                                 console.error('로그인 실패:', err);
//                                 setLoginError(true); // 에러 메시지 표시
//                             });
//                         }}
//                     >
//                         {({ handleChange, handleBlur, handleSubmit, values }) => (
//                             <StyledFormArea>
//                                 {loginError && (
//                                     <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
//                                         이메일 또는 비밀번호가 올바르지 않습니다.
//                                     </Text>
//                                 )}

//                                 <MyTextInput
//                                     label="이메일"
//                                     placeholder="example@gmail.com"
//                                     placeholderTextColor={exTextColor}
//                                     onChangeText={handleChange("email")}
//                                     onBlur={handleBlur("email")}
//                                     value={values.email}
//                                     keyboardType="email-address"
//                                 />

//                                 <MyTextInput
//                                     label="비밀번호"
//                                     placeholder="* * * * * * *"
//                                     placeholderTextColor={exTextColor}
//                                     onChangeText={handleChange("password")}
//                                     onBlur={handleBlur("password")}
//                                     value={values.password}
//                                     secureTextEntry={true}
//                                 />

//                                 <LoginButton onPress={handleSubmit}>
//                                     <ButtonText>로그인</ButtonText>
//                                 </LoginButton>
//                             </StyledFormArea>
//                         )}
//                     </Formik>
//                 </InnerContainer>
//             </StyledContainer>
//         </KeyboardAvoidingWrapper>
//     );
// };


// // 커스텀 입력 필드 컴포넌트
// const MyTextInput = ({ label, ...props }) => {
//     return (
//         <View> 
//             <StyledInputLabel>
//                 <Text>{label}</Text>
//             </StyledInputLabel>
//             <StyledTextInput {...props} />
//         </View>
//         );
// };


// // 카카오 로그인 스타일 정의
// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "#FEE500", //카카오 로그인 버튼 색상
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: "bold",
//     },
// });

// export default Login;