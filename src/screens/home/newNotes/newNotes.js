import React from 'react';
import {View, Text} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';

const NewNotes = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar type={'home'} title={'New Notes'} />
      <View style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
        <Text
          style={{
            fontFamily: theme.fontFamily.bold,
            fontSize: 22,
            color: theme.colors.neutral.black,
            width: '80%',
          }}>
          What Do You Want to Notes?
        </Text>
      </View>
    </View>
  );
};

export default NewNotes;
