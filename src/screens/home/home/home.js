import React from 'react';
import {Image, Text, View} from 'react-native';
import {theme} from '../../../theme/theme';
import {Icon} from '@rneui/base';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignSelf: 'center', width: '100%', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/start.png')}
          style={{width: '50%', resizeMode: 'contain'}}
        />
        <Text style={{fontFamily: theme.fontFamily.bold, fontSize: 20}}>
          Start your Journey
        </Text>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: 12,
            color: theme.colors.neutral.darkGrey,
            width: '55%',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Every big step start with small step. Notes your first idea and start
          your journey!
        </Text>
      </View>

      <View
        style={{
          backgroundColor: theme.colors.primary.base,
          width: 60,
          height: 60,
          borderRadius: 100,
          position: 'absolute',
          alignSelf: 'center',
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="plus" type="ant-design" size={30} color={'white'} />
      </View>
    </View>
  );
};

export default Home;
