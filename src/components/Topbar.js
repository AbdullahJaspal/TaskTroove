import {Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {theme} from '../theme/theme';

function Topbar({title}) {
  return (
    <View style={styles.topCont}>
      <Icon
        name="chevron-left"
        type="feather"
        color={theme.colors.primary.base}
      />
      <Text style={styles.topText}>{title}</Text>
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
