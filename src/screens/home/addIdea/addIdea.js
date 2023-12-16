import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icon} from '@rneui/base';

const tags = [
  'Important',
  'Top Priority',
  'Should be Done This Week',
  'Important',
];

const colors = [
  theme.colors.error.light,
  theme.colors.primary.light,
  theme.colors.scondary.light,
  theme.colors.success.light,
  theme.colors.warning.light,
  theme.colors.neutral.white,
];
const AddIdea = () => {
  const rbsheet = useRef();
  const [backgroundColor, setBackgroundColor] = useState(
    theme.colors.neutral.white,
  );
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <Topbar type={'home'} />
      <View style={styles.titleCont}>
        <Image
          source={require('../../../assets/icons/bulb.png')}
          style={styles.icon}
        />
        <Text style={styles.title}> New Product Ideas</Text>
      </View>
      <TextInput
        multiline
        placeholder="Start typing ideas"
        style={styles.input}
      />
      <View style={styles.line} />
      <Text style={styles.reminder}> Reminder set on 15/07/2021, 18:30</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {tags.map(item => {
          return (
            <TouchableOpacity
              style={styles.tagCont}
              onPress={() => rbsheet.current.open()}>
              <Text style={styles.tagTxt}> {item} </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <RBSheet
        ref={rbsheet}
        height={300}
        openDuration={250}
        customStyles={{
          container: {},
        }}>
        <View style={styles.crossCont}>
          <Icon
            name="closecircle"
            type="ant-design"
            color={theme.colors.neutral.baseGrey}
            onPress={() => {
              rbsheet.current.close();
            }}
          />
        </View>
        <Text style={styles.changeBg}>CHANGE BACKGROUND</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {colors.map(item => {
            return (
              <View style={styles.colorCont(backgroundColor, item)}>
                <TouchableOpacity
                  style={styles.color(backgroundColor, item)}
                  onPress={() => {
                    setBackgroundColor(item);
                  }}></TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={styles.line} />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {flex: 1, backgroundColor: 'white'},
  titleCont: {
    flexDirection: 'row',
    width: '95%',
    marginTop: 10,
    alignSelf: 'center',
  },
  icon: {width: 30, height: 30, resizeMode: 'contain', marginTop: 5},
  title: {
    fontSize: 32,
    fontFamily: theme.fontFamily.bold,
    width: '70%',
  },
  input: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: theme.fontFamily.regular,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: theme.colors.neutral.baseGrey,
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
  },
  reminder: {
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    width: '70%',
    color: theme.colors.neutral.darkGrey,
    marginTop: 10,
    marginLeft: 10,
  },
  tagCont: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: theme.colors.neutral.lightGrey,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  tagTxt: {
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.neutral.darkGrey,
  },
  crossCont: {
    backgroundColor: theme.colors.neutral.darkGrey,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  changeBg: {
    fontFamily: theme.fontFamily.regular,
    marginLeft: 10,
    color: theme.colors.neutral.darkGrey,
  },
  colorCont: (color, item) => {
    return {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginLeft: 10,
      marginTop: 10,
      borderWidth: color === item ? 2 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.neutral.darkGrey,
    };
  },
  color: (color, item) => {
    return {
      backgroundColor: item,
      width: 30,
      height: 30,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.neutral.lightGrey,
    };
  },
});

export default AddIdea;
