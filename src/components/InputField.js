import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {theme} from '../theme/theme';
import {Icon} from '@rneui/base';

function InputField({
  title,
  errorMessage,
  error,
  placeholder,
  showPass,
  onPress,
  pass,
  width = '95%',
  style,
}) {
  return (
    <View style={{width: width, alignSelf: 'center', ...style}}>
      <Text
        style={{
          fontFamily: theme.fontFamily.regular,
          fontSize: 16,
          color: theme.colors.neutral.black,
          marginTop: 20,
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          height: 50,
          borderColor: error
            ? theme.colors.error.base
            : theme.colors.neutral.darkGrey,
          borderRadius: 10,
          marginTop: 5,
          paddingHorizontal: 10,
        }}
        secureTextEntry={showPass}
        placeholder={placeholder}
      />
      {pass && (
        <View style={{position: 'absolute', top: '60%', right: 10}}>
          <Icon
            name={showPass ? 'eye-off' : 'eye'}
            type="feather"
            onPress={onPress}
          />
        </View>
      )}
      {error && (
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: 14,
            color: theme.colors.error.base,
            marginTop: 5,
          }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
export default InputField;
