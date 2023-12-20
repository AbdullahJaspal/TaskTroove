import {Icon} from '@rneui/base';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme/theme';

const Section = ({
  iconName,
  iconType,
  title,
  value,
  color = 'black',
  onPress,
  onPressL,
}) => {
  return (
    <View
      style={{
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <TouchableOpacity onPress={onPressL}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Icon name={iconName} type={iconType} size={22} color={color} />
          <Text
            style={{
              fontFamily: theme.fontFamily.semibold,
              marginLeft: 8,
              color: color,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <Text
        onPress={onPress}
        style={{
          fontFamily: theme.fontFamily.regular,
          marginLeft: 10,
          color: theme.colors.neutral.darkGrey,
          marginTop: 5,
        }}>
        {value}
      </Text>
    </View>
  );
};

export default Section;
