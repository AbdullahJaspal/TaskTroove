import React from 'react';
import Splash from './src/screens/splash/splash';
import OnBoard from './src/screens/auth/onBoard/onBoard';
import Register from './src/screens/auth/register/register';
import {SafeAreaView} from 'react-native';
import OtpScreen from './src/screens/auth/otpScreen/otpScreen';
import ForgetPassword from './src/screens/auth/forgetPassword/forgetPassword';
import NewPassword from './src/screens/auth/newPassword/newPassword';
import Home from './src/screens/home/home/home';
import Login from './src/screens/auth/login/login';
import NewNotes from './src/screens/home/newNotes/newNotes';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NewNotes />
    </SafeAreaView>
  );
}
export default App;
