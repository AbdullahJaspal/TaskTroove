import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon} from '@rneui/themed';

function OnBoard() {
  const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Note Down anything you want to achieve, today or in the future.',
      image: require('../../assets/images/onBoard1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Different goals, different way to note it down.',
      image: require('../../assets/images/onBoard2.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: 'Text area, checklist, or some combination. Adapt with your needs',
      image: require('../../assets/images/onBoard3.png'),
      backgroundColor: '#22bcb5',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Image source={item.image} />
        <Text
          style={{
            fontSize: 15,
            fontFamily: theme.fontFamily.medium,
            color: theme.colors.neutral.white,
            width: '90%',
            alignSelf: 'center',
          }}>
          {item.text}
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            backgroundColor: theme.colors.neutral.white,
            height: 50,
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: 50,
          }}>
          <Text />
          <Text>Let's get started</Text>
          <Icon name="arrowright" type="ant-design" />
        </TouchableOpacity>
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary.base}}>
      <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
    </View>
  );
}

export default OnBoard;
