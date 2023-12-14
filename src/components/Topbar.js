import {Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {theme} from '../theme/theme';

function Topbar({title, type}) {
  return type === 'auth' ? (
    <View style={styles.topCont}>
      <Icon
        name="chevron-left"
        type="feather"
        color={theme.colors.primary.base}
      />
      <Text style={styles.topText}>{title}</Text>
    </View>
  ) : (
    <View
      style={{
        width: '100%',
        alignSelf: 'center',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: theme.colors.neutral.lightGrey,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="chevron-left"
          type="feather"
          color={theme.colors.primary.base}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.medium,
            color: theme.colors.primary.base,
          }}>
          {'Back'}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: theme.fontFamily.bold,
          fontSize: 16,
          color: theme.colors.neutral.black,
          marginLeft: 10,
        }}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="chevron-left" type="feather" color={'transparent'} />
        <Text
          style={{
            fontFamily: theme.fontFamily.medium,
            color: 'transparent',
          }}>
          {'Back'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
export default Topbar;
