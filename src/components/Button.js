import {Icon} from '@rneui/base';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme/theme';

function Button({title, onPress, contentolor, buttonStyle}) {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        backgroundColor: theme.colors.primary.base,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 50,
        ...buttonStyle,
      }}
      onPress={onPress}>
      <Text />
      <Text style={{color: contentolor, fontFamily: theme.fontFamily.medium}}>
        {title}
      </Text>
      <Icon name="arrowright" type="ant-design" color={contentolor} />
    </TouchableOpacity>
  );
}

export default Button;
