import React from 'react';
import {SafeAreaView} from 'react-native';
import AddIdea from './src/screens/home/addIdea/addIdea';
import Home from './src/screens/home/home/home';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
}
export default App;
