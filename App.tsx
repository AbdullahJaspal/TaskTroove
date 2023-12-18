import React from 'react';
import {SafeAreaView} from 'react-native';
import AddIdea from './src/screens/home/addIdea/addIdea';
import NewNotes from './src/screens/home/newNotes/newNotes';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NewNotes />
    </SafeAreaView>
  );
}
export default App;
