import React, {useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon} from '@rneui/themed';
import Button from '../../components/Button';

function OnBoard() {
  const slider = useRef();
  const slides = [
    {
      key: 1,
      title: `Let's get started`,
      text: 'Note Down anything you want to achieve, today or in the future.',
      image: require('../../assets/images/onBoard1.png'),
    },
    {
      key: 2,
      title: `Next`,
      text: 'Different goals, different way to note it down.',
      image: require('../../assets/images/onBoard2.png'),
    },
    {
      key: 3,
      title: 'Proceed to Login',
      text: 'Text area, checklist, or some combination. Adapt with your needs',
      image: require('../../assets/images/onBoard3.png'),
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
        <Button
          title={item.title}
          onPress={() => {
            slider.current.goToSlide(item.key);
          }}
        />
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary.base}}>
      <AppIntroSlider
        ref={slider}
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        showNextButton={false}
        showDoneButton={false}
      />
    </View>
  );
}

export default OnBoard;
