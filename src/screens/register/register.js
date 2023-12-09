import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../../theme/theme';
import {Icon} from '@rneui/base';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  return (
    <View style={styles.mainCont}>
      <View style={styles.topCont}>
        <Icon
          name="chevron-left"
          type="feather"
          color={theme.colors.primary.base}
        />
        <Text style={styles.topText}>Back to Login</Text>
      </View>
      <Text style={styles.register}>Register</Text>
      <Text style={styles.takeNotes}>And start taking notes</Text>
      <InputField
        title={'Full Name'}
        errorMessage={'Only Alphabetical Characters'}
        placeholder={'Enter your fullname'}
      />
      <InputField
        title={'Email Address'}
        errorMessage={'Email address not valid'}
        placeholder={'Enter email'}
      />
      <InputField
        title={'Password'}
        errorMessage={'Password should contain A-Z,a-z,1-9'}
        placeholder={'Enter password'}
        showPass={showPass}
        pass
        onPress={() => {
          setShowPass(!showPass);
        }}
      />
      <InputField
        title={'Retype Password'}
        errorMessage={'Password should contain A-Z,a-z,1-9'}
        placeholder={'Enter password'}
        showPass={showRePass}
        pass
        onPress={() => {
          setShowRePass(!showRePass);
        }}
      />

      <Button
        buttonStyle={styles.button}
        contentolor={theme.colors.neutral.white}
        title={'Register'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {flex: 1, backgroundColor: theme.colors.neutral.white},
  topCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    height: 50,
  },
  topText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 16,
    color: theme.colors.primary.base,
    marginLeft: 10,
  },
  register: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 38,
    color: theme.colors.neutral.black,
    width: '95%',
    alignSelf: 'center',
  },
  takeNotes: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: theme.colors.neutral.darkGrey,
    width: '95%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary.base,
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default Register;
