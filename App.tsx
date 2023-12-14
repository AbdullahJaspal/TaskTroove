import React from 'react';
import Splash from './src/screens/splash/splash';
import OnBoard from './src/screens/onBoard/onBoard';
import Register from './src/screens/register/register';
import {SafeAreaView} from 'react-native';
import OtpScreen from './src/screens/otpScreen/otpScreen';
import ForgetPassword from './src/screens/forgetPassword/forgetPassword';
import NewPassword from './src/screens/newPassword/newPassword';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NewPassword />
    </SafeAreaView>
  );
}
export default App;
