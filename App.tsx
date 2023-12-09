import React from 'react';
import Splash from './src/screens/splash/splash';
import OnBoard from './src/screens/onBoard/onBoard';
import Register from './src/screens/register/register';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Register />
    </SafeAreaView>
  );
}
export default App;
