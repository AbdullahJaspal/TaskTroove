import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';

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
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar type={'home'} title={'New Notes'} />
      <View style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
        <Text style={styles.title}>What Do You Want to Notes?</Text>
        {data.map(item => {
          return (
            <TouchableOpacity style={styles.tab(item.color)}>
              <View style={styles.iconWrap(item.iconColor)}>
                <Image
                  source={require('../../../assets/icons/idea.png')}
                  style={{tintColor: theme.colors.neutral.white}}
                />
              </View>
              <View style={{width: '85%'}}>
                <Text style={styles.tabTitle}>Interesting Idea</Text>
                <Text style={styles.tabDes}>
                  Use free text area, feel free to write it all
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
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
      width: '100%',
      height: 80,
      flexDirection: 'row',
      backgroundColor: color,
      borderRadius: 10,
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
});

export default NewNotes;
