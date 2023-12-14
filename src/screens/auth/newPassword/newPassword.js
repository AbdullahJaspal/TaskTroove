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
    <View style={styles.mainView}>
      <Topbar title={'Back to Login'} type={'auth'} />
      <View style={styles.bottomView}>
        <Text style={styles.title}>Create a new Password</Text>
        <Text style={styles.des}>
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
  mainView: {flex: 1, justifyContent: 'space-between'},
  bottomView: {width: '95%', alignSelf: 'center'},
  title: {fontFamily: theme.fontFamily.bold, fontSize: 35},
  des: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.neutral.darkGrey,
  },
});
export default NewPassword;
