import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Topbar from '../../components/Topbar';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {theme} from '../../theme/theme';
import Button from '../../components/Button';

const {width, height} = Dimensions.get('screen');
const OtpScreen = () => {
  const [code, setCode] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Topbar title={'Back to register'} />
      <View style={{width: '95%', alignSelf: 'center'}}>
        <Text style={{fontFamily: theme.fontFamily.bold, fontSize: 35}}>
          Input Code
        </Text>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: 14,
            color: theme.colors.neutral.darkGrey,
          }}>
          Enter input the code you receive on your email
        </Text>
        <OTPInputView
          style={{
            width: '100%',
            height: width / 3.5,
            justifyContent: 'space-between',
          }}
          pinCount={4}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => {
            setCode(code);
          }}
          //   autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <Button
          buttonStyle={{width: '100%'}}
          contentolor={'white'}
          title={'Submit'}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.semibold,
            fontSize: 14,
            color: theme.colors.primary.base,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 60,
          }}>
          Din't receive code? Resend
        </Text>
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
export default OtpScreen;
