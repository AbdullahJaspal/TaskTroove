import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';

const {width, height} = Dimensions.get('screen');
const NewPassword = () => {
  const [code, setCode] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Topbar title={'Back to Login'} />
      <View style={{width: '95%', alignSelf: 'center'}}>
        <Text style={{fontFamily: theme.fontFamily.bold, fontSize: 35}}>
          Create a new Password
        </Text>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: 14,
            color: theme.colors.neutral.darkGrey,
          }}>
          Your new password should be different from the previous password
        </Text>
        <InputField
          title={'New Password'}
          width="100%"
          style={{
            marginVertical: 10,
          }}
          showPass
          pass
        />
        <InputField
          title={'Retype Password'}
          width="100%"
          style={{
            marginVertical: 10,
            marginBottom: 30,
          }}
          showPass
          pass
        />
        <Button
          buttonStyle={{width: '100%', marginVertical: 10}}
          contentolor={'white'}
          title={'Submit'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: width / 5,
    height: width / 5,
  },

  borderStyleHighLighted: {
    borderColor: theme.colors.success.base,
  },

  underlineStyleBase: {
    width: width / 5,
    height: width / 5,
    borderWidth: 0,
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 5,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default NewPassword;
