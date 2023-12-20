import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icon} from '@rneui/base';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import Section from '../../../components/Sections';
import DatePicker from 'react-native-date-picker';

import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import moment from 'moment';

const format = [
  {
    img: require('../../../assets/icons/left.png'),
    onPress: () => {
      setTextAlign('left');
    },
  },

  {
    img: require('../../../assets/icons/center.png'),
    onPress: () => {
      setTextAlign('center');
    },
  },
  {
    img: require('../../../assets/icons/right.png'),
    onPress: () => {
      setTextAlign('right');
    },
  },
  {
    img: require('../../../assets/icons/list.png'),
  },
  {
    img: require('../../../assets/icons/bold.png'),
    onPress: () => {
      setFontWeight('bold');
    },
  },
  {img: require('../../../assets/icons/underline.png')},
  {img: require('../../../assets/icons/italic.png')},
];
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
  const [backgroundColor, setBackgroundColor] = useState(
    theme.colors.neutral.white,
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [label, setLabel] = useState('');
  const [labels, setLabels] = useState([]);

  console.log(date);
  const richText = useRef();
  const rbsheet = useRef();
  const widt = useSharedValue(1);
  const borderRad = useSharedValue(1);

  const richTextHandle = descriptionText => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML('');
    }
  };

  const handleKeyDown = e => {
    console.log(label);
    if (e.nativeEvent.key == 'Enter') {
    }
  };

  const onSubmitted = () => {
    console.log(label);
    labels.push(label);
    console.log(labels);
    setLabel('');
  };

  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <Topbar type={'home'} />
      <ScrollView>
        <RichToolbar
          editor={richText}
          selectedIconTint="#873c1e"
          iconTint="#312921"
          actions={[
            actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.setStrikethrough,
            actions.setUnderline,
          ]}
          style={styles.richTextToolbarStyle}
        />

        <View style={styles.titleCont}>
          <Image
            source={require('../../../assets/icons/bulb.png')}
            style={styles.icon}
          />
          <TextInput style={styles.title} multiline>
            {' '}
            New Product Ideas
          </TextInput>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <RichEditor
            ref={richText}
            onChange={richTextHandle}
            placeholder="Write your cool content here :)"
            androidHardwareAccelerationDisabled={true}
            editorStyle={{backgroundColor: backgroundColor}}
            initialHeight={250}
          />
        </KeyboardAvoidingView>
        <View style={styles.line} />
        <Text style={styles.reminder}> Reminder set on 15/07/2021, 18:30</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {tags.map(item => {
            return (
              <TouchableOpacity style={styles.tagCont} onPress={() => {}}>
                <Text style={styles.tagTxt}> {item} </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <RBSheet
        ref={rbsheet}
        openDuration={250}
        height={400}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'space-evenly',
            paddingBottom: 30,
          },
        }}>
        <View style={styles.crossCont}>
          <Icon
            name="closecircle"
            type="ant-design"
            color={theme.colors.neutral.baseGrey}
            onPress={() => {
              rbsheet.current.close();
              widt.value = 1;
              borderRad.value = 1;
            }}
          />
        </View>
        <Text style={styles.changeBg}>CHANGE BACKGROUND</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          {colors.map((item, index) => {
            return (
              <Animated.View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  ...styles.colorCont(backgroundColor, item),
                }}>
                <TouchableOpacity
                  style={styles.color(backgroundColor, item)}
                  onPress={() => {
                    setBackgroundColor(item);
                  }}></TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
        <View style={styles.line} />
        <Text style={styles.changeBg}>Extra</Text>
        <Section
          iconName="clock"
          iconType={'feather'}
          title={'Set Reminder'}
          value={reminder ? moment(date).format('MMM Do YY   LT') : 'Not set'}
          onPress={() => {
            setOpen(true);
            setReminder(true);
          }}
        />
        <Section
          iconName="tag"
          iconType={'feather'}
          title={'Give Label'}
          value={'Not set'}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <Section
          iconName="check"
          iconType={'feather'}
          title={'Mark as Complete'}
          value={''}
        />
        <View style={styles.line} />

        <Section
          iconName="delete"
          iconType={'material-icons'}
          title={'Delete Notes'}
          value={''}
          color={theme.colors.error.base}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.crossCont}>
                <Icon
                  name="closecircle"
                  type="ant-design"
                  color={theme.colors.neutral.baseGrey}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
              </View>
              <Text style={{fontFamily: theme.fontFamily.semibold}}>
                Label Name
              </Text>
              <TextInput
                style={styles.labelInput}
                onKeyPress={handleKeyDown}
                value={label}
                onChangeText={setLabel}
                onSubmitEditing={() => onSubmitted()}
              />
              <Text style={styles.changeBg}>
                Press "Enter" after label to add
              </Text>
              {labels.length !== 0 && (
                <View>
                  <View style={styles.tagCont}>
                    {labels.map(item => {
                      return (
                        <View style={styles.tagWrap}>
                          <Text style={{fontFamily: theme.fontFamily.regular}}>
                            {item}
                          </Text>
                          <Icon
                            name="closecircle"
                            type="ant-design"
                            size={14}
                            style={{marginLeft: 10}}
                            onPress={() => {
                              let arr = labels.filter(ite => {
                                return item !== ite;
                              });
                              setLabels(arr);
                            }}
                          />
                        </View>
                      );
                    })}
                  </View>
                  <Section
                    iconName="delete"
                    iconType={'material-icons'}
                    title={'Clear all tags'}
                    value={''}
                    color={theme.colors.error.base}
                    onPressL={() => {
                      setLabels([]);
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        </Modal>
      </RBSheet>

      <View style={styles.bottomCont}>
        <Text style={{fontFamily: theme.fontFamily.medium, marginLeft: 10}}>
          Last edited on 19.30
        </Text>
        <View style={styles.bottomLeft}>
          <Icon name="bookmark-o" type="font-awesome" />
          <TouchableOpacity
            style={styles.extraButton}
            onPress={() => {
              rbsheet.current.open();
              widt.value = widt.value + 39;
              borderRad.value = 50;
            }}>
            <Icon
              name="dots-three-horizontal"
              type="entypo"
              color={theme.colors.neutral.white}
            />
          </TouchableOpacity>
        </View>
      </View>
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
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    flexWrap: 'wrap',
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
    marginTop: 5,
  },
  colorCont: (color, item) => {
    return {
      marginLeft: 10,
      borderWidth: color === item ? 2 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.neutral.darkGrey,
    };
  },
  color: (color, item) => {
    return {
      backgroundColor: item,
      width: '80%',
      height: '80%',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.neutral.lightGrey,
    };
  },
  bottomCont: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.neutral.white,
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '40%',
    justifyContent: 'flex-end',
  },
  extraButton: {
    backgroundColor: theme.colors.primary.base,
    height: '100%',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rbga(0,0,0,0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  labelInput: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    borderColor: theme.colors.neutral.darkGrey,
    paddingHorizontal: 10,
  },
  tagWrap: {
    backgroundColor: theme.colors.neutral.baseGrey,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 5,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default AddIdea;
