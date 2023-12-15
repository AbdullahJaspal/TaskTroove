import React, {useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar type={'home'} />
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../../assets/icons/bulb.png')}
          style={{width: 30, height: 30, resizeMode: 'contain', marginTop: 5}}
        />
        <Text
          style={{
            fontSize: 32,
            fontFamily: theme.fontFamily.bold,
            width: '70%',
          }}>
          {' '}
          New Product Ideas
        </Text>
      </View>
      <TextInput
        multiline
        placeholder="Start typing ideas"
        style={{
          width: '95%',
          alignSelf: 'center',
          marginTop: 10,
          fontFamily: theme.fontFamily.regular,
        }}
      />
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: theme.colors.neutral.baseGrey,
          marginTop: 20,
          width: '95%',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontFamily: theme.fontFamily.regular,
          width: '70%',
          color: theme.colors.neutral.darkGrey,
          marginTop: 10,
          marginLeft: 10,
        }}>
        {' '}
        Reminder set on 15/07/2021, 18:30
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {tags.map(item => {
          return (
            <TouchableOpacity
              style={{
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: theme.colors.neutral.lightGrey,
                padding: 3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                paddingHorizontal: 8,
              }}
              onPress={() => rbsheet.current.open()}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: theme.fontFamily.regular,
                  color: theme.colors.neutral.darkGrey,
                }}>
                {' '}
                {item}{' '}
              </Text>
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
        <View
          style={{
            backgroundColor: theme.colors.neutral.darkGrey,
            borderRadius: 20,
            alignSelf: 'flex-end',
            marginRight: 10,
            marginTop: 10,
          }}>
          <Icon
            name="closecircle"
            type="ant-design"
            color={theme.colors.neutral.baseGrey}
            onPress={() => {
              rbsheet.current.close();
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            marginLeft: 10,
            color: theme.colors.neutral.darkGrey,
          }}>
          CHANGE BACKGROUND
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {colors.map(item => {
            return (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginLeft: 10,
                  marginTop: 10,
                  borderWidth: backgroundColor === item ? 2 : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: theme.colors.neutral.darkGrey,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: item,
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: theme.colors.neutral.lightGrey,
                  }}
                  onPress={() => {
                    setBackgroundColor(item);
                  }}></TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '95%',
            alignSelf: 'center',
            marginTop: 10,
            borderColor: theme.colors.neutral.darkGrey,
          }}></View>
      </RBSheet>
    </View>
  );
};

export default AddIdea;
