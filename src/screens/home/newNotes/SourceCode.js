import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
const data = [
  {
    img: require('../../../assets/icons/idea.png'),
    title: 'Interesting Idea',
    des: 'Use free text area, feel free to write it all',
    color: theme.colors.primary.base,
    iconColor: theme.colors.primary.dark,
  },
  {
    img: require('../../../assets/icons/shop.png'),
    title: 'Buying Something',
    des: 'Use checklist, so you won’t miss anything',
    color: theme.colors.error.base,
    iconColor: theme.colors.error.dark,
  },
  {
    img: require('../../../assets/icons/goal.png'),
    title: 'Goals',
    des: 'Near/future goals, notes and keep focus ',
    color: theme.colors.success.base,
    iconColor: theme.colors.success.dark,
  },
  {
    img: require('../../../assets/icons/guide.png'),
    title: 'Guidance',
    des: 'Create guidance for routine activities',
    color: theme.colors.warning.base,
    iconColor: theme.colors.warning.dark,
  },
  {
    img: require('../../../assets/icons/routine.png'),
    title: 'Routine Tasks',
    des: 'Checklist with sub-checklist',
    color: theme.colors.scondary.base,
    iconColor: theme.colors.warning.dark,
  },
];

const NewNotes = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const widt = useSharedValue(0);
  const heigh = useSharedValue(0);
  const borderB = useSharedValue(100);

  const duration = 2000;

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      widt.value = withSpring(width / 1.05);
      heigh.value = withSpring(80);
      borderB.value = withSpring(10);
      setShow(true);
    }, 1000);
    widt.value = withSpring(60);
    heigh.value = withSpring(60);
    borderB.value = withSpring(100);
    setShow(false);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar type={'home'} title={'New Notes'} />
      <View style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
        <Text style={styles.title}>What Do You Want to Note?</Text>

        <Animated.View
          style={{
            width: widt,
            height: heigh,
            marginTop: 10,
            borderRadius: borderB,
            flexDirection: 'row',
            alignSelf: 'flex-start',
            

            ...styles.tab(data[0].color),
          }}>
          {animate && (
            <View style={styles.iconWrap(data[0].iconColor)}>
              <Image
                source={data[0].img}
                style={{tintColor: theme.colors.neutral.white}}
              />
            </View>
          )}
          {show && (
            <View style={{width: '85%'}}>
              <Text style={styles.tabTitle}>{data[0].title}</Text>
              <Text style={styles.tabDes}>{data[0].des}</Text>
            </View>
          )}
        </Animated.View>
        <Animated.View
          style={{
            width: widt,
            height: heigh,
            marginTop: 10,
            borderRadius: borderB,
            flexDirection: 'row',
            ...styles.tab(data[1].color),
            alignSelf: 'center',
          }}>
          {animate && (
            <View style={styles.iconWrap(data[1].iconColor)}>
              <Image
                source={data[1].img}
                style={{tintColor: theme.colors.neutral.white}}
              />
            </View>
          )}
          {show && (
            <View style={{width: '85%'}}>
              <Text style={styles.tabTitle}>{data[1].title}</Text>
              <Text style={styles.tabDes}>{data[1].des}</Text>
            </View>
          )}
        </Animated.View>

        <Animated.View
          style={{
            width: widt,
            height: heigh,
            marginTop: 10,
            borderRadius: borderB,
            flexDirection: 'row',
            ...styles.tab(data[2].color),
            alignSelf: 'flex-end',
          }}>
          {animate && (
            <View style={styles.iconWrap(data[2].iconColor)}>
              <Image
                source={data[2].img}
                style={{tintColor: theme.colors.neutral.white}}
              />
            </View>
          )}
          {show && (
            <View style={{width: '85%'}}>
              <Text style={styles.tabTitle}>{data[2].title}</Text>
              <Text style={styles.tabDes}>{data[2].des}</Text>
            </View>
          )}
        </Animated.View>
        <Animated.View
          style={{
            width: widt,
            height: heigh,
            marginTop: 10,
            borderRadius: borderB,
            flexDirection: 'row',
            ...styles.tab(data[3].color),
            alignSelf: 'center',
          }}>
          {animate && (
            <View style={styles.iconWrap(data[3].iconColor)}>
              <Image
                source={data[3].img}
                style={{tintColor: theme.colors.neutral.white}}
              />
            </View>
          )}
          {show && (
            <View style={{width: '85%'}}>
              <Text style={styles.tabTitle}>{data[3].title}</Text>
              <Text style={styles.tabDes}>{data[3].des}</Text>
            </View>
          )}
        </Animated.View>

        <Animated.View
          style={{
            width: widt,
            height: heigh,
            marginTop: 10,
            borderRadius: borderB,
            flexDirection: 'row',
            ...styles.tab(data[4].color),
          }}>
          {animate && (
            <View style={styles.iconWrap(data[4].iconColor)}>
              <Image
                source={data[4].img}
                style={{tintColor: theme.colors.neutral.white}}
              />
            </View>
          )}
          {show && (
            <View style={{width: '85%'}}>
              <Text style={styles.tabTitle}>{data[4].title}</Text>
              <Text style={styles.tabDes}>{data[4].des}</Text>
            </View>
          )}
        </Animated.View>

        {/* {data.map(item => {
          return (
         
          );
        })} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 22,
    color: theme.colors.neutral.black,
    width: '80%',
  },
  tab: color => {
    return {
      backgroundColor: color,
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      marginTop: 20,
    };
  },
  iconWrap: color => {
    return {
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  tabTitle: {
    color: theme.colors.neutral.white,
    fontFamily: theme.fontFamily.semibold,
    fontSize: 15,
  },
  tabDes: {
    color: theme.colors.neutral.white,
    fontFamily: theme.fontFamily.regular,
    fontSize: 12,
    marginTop: 5,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default NewNotes;
