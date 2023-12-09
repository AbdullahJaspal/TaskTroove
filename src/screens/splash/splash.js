import React from 'react';
import {Image, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

function Splash() {
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary.base,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={{
          width: '80%',
          height: '50%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          fontSize: 28,
          fontFamily: theme.fontFamily.bold,
          color: theme.colors.neutral.white,
        }}>
        TaskTroove
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontFamily: theme.fontFamily.medium,
          color: theme.colors.neutral.white,
        }}>
        Capture ideas, unleash your creativity!
      </Text>
    </View>
  );
}
export default Splash;
