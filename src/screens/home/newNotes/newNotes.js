import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';

const NewNotes = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar type={'home'} title={'New Notes'} />
      <View style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
        <Text style={styles.title}>What Do You Want to Notes?</Text>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            backgroundColor: theme.colors.primary.base,
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: theme.colors.primary.dark,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/icons/idea.png')}
              style={{tintColor: theme.colors.neutral.white}}
            />
          </View>
          <View style={{width: '85%'}}>
            <Text
              style={{
                color: theme.colors.neutral.white,
                fontFamily: theme.fontFamily.semibold,
                fontSize: 15,
              }}>
              Interesting Idea
            </Text>
            <Text
              style={{
                color: theme.colors.neutral.white,
                fontFamily: theme.fontFamily.regular,
                fontSize: 12,
                marginTop: 5,
              }}>
              Use free text area, feel free to write it all
            </Text>
          </View>
        </View>
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
});

export default NewNotes;
