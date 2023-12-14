import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';

const {width, height} = Dimensions.get('screen');
const ForgetPassword = () => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.mainView}>
      <Topbar title={'Back to Login'} />
      <View style={styles.bottomView}>
        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.des}>
          Insert your email address to receive a code for creating a new
          password
        </Text>
        <InputField
          title={'Email Address'}
          width="100%"
          style={{
            marginVertical: 20,
          }}
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
export default ForgetPassword;
