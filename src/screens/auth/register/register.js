import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../theme/theme';
import {Icon} from '@rneui/base';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Topbar from '../../../components/Topbar';

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  return (
    <View style={styles.mainCont}>
      <Topbar title={'Back to Login'} type={'auth'} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <Text style={styles.or}>⎯⎯⎯⎯⎯⎯⎯⎯⎯ Or ⎯⎯⎯⎯⎯⎯⎯⎯⎯</Text>
        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <Text />
          <Image
            source={require('../../../assets/icons/google.png')}
            style={{width: 20, height: 20}}
          />
          <Text style={styles.googleTxt}>{'Register with Google'}</Text>
        </TouchableOpacity>
        <Text style={styles.already}>Already have an account? Login</Text>
      </ScrollView>
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
    marginVertical: 30,
  },
  or: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: theme.colors.neutral.darkGrey,
    alignSelf: 'center',
  },
  googleButton: {
    width: '95%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.neutral.darkGrey,
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
  googleTxt: {
    color: theme.colors.neutral.black,
    fontFamily: theme.fontFamily.medium,
    marginLeft: 10,
  },
  already: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: 14,
    color: theme.colors.primary.base,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
});
export default Register;
