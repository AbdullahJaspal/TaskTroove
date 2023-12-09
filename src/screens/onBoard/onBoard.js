import React from 'react';
import {View} from 'react-native';
import {theme} from '../../theme/theme';
import AppIntroSlider from 'react-native-app-intro-slider';

function OnBoard() {
  const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('./assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('./assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('./assets/3.jpg'),
      backgroundColor: '#22bcb5',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
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
