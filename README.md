## 이미지 불러오기 기능 설치
프론트(React Native CLI)에서 설치 필요
```
npm install react-native-image-picker
```

## gps 불러오는 라이브러리 설치
```
npm install react-native-geolocation-service
```

## gps 추가로 인한 수정 파일(04/15)
에러 수정 중
andriod/

settings.gradle

andriod/app

build.gradle

android/app/src/main/

AndroidManifest.xml

screens/

Welcome.js

## 기존 CAPSTONE_FRONTEND-MAIN에서 수정/생성으로 변경 된 파일(04/14)
screens/

Mypage.js - 수강생 배경색상 styles.js 보고 #fff000 썼는데 다르게 나오네요..

ChangePassword.js

MyProfileEdit.js

ReviewManage.js - 더미 데이터

PaymentHistory.js - 더미 데이터

Login.js

navigators/

RootStack.js

android/app/src/main/

AndroidManifest.xml

---

터미널에 입력하는 코드는 screens와 navigators, components 등 이러한 폴더의 상위폴더에서 실행해야 합니다.


## 패키지 설치
```
npm install
```
package.json 패키지 설치하세요.
버전 확인하세요.


## 안드로이드 에뮬레이터에 apk 설치
```
cd android
```
```
./gradlew assembleDebug
```
```
adb install app/build/outputs/apk/debug/app-debug.apk
```
에러 나면 지피티에게 물어봅시다...


##  터미널에 npm start 입력
```
npm start
```
입력 후 에뮬레이터에 설치된 앱(아마 안드로이드 이미지의 apk) 실행
