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
} from 'react-native';
import Topbar from '../../../components/Topbar';
import {theme} from '../../../theme/theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icon} from '@rneui/base';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

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
  const richText = useRef();
  const rbsheet = useRef();

  const [descHTML, setDescHTML] = useState('');
  const [showDescError, setShowDescError] = useState(false);

  const richTextHandle = descriptionText => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML('');
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, '').trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, '').trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };
  const [backgroundColor, setBackgroundColor] = useState(
    theme.colors.neutral.white,
  );
  const [textAlign, setTextAlign] = useState('left');

  const [fontWeight, setFontWeight] = useState('400');
  const [notes, setNotes] = useState('');

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
            style={styles.richTextEditorStyle}
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

      <View
        style={{
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
        }}>
        <Text style={{fontFamily: theme.fontFamily.medium, marginLeft: 10}}>
          Last edited on 19.30
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            width: '40%',
            justifyContent: 'flex-end',
          }}>
          <Icon name="bookmark-o" type="font-awesome" />
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.primary.base,
              height: '100%',
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            onPress={() => rbsheet.current.open()}>
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
