import {Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './UserHeaderStyles';
import BackIcon from '../../atoms/BackIcon/BackIcon';
import ShareIcon from '../../atoms/ShareIcon/ShareIcon';
import HeartFilledIcon from '../../atoms/HeartFilledIcon/HeartFilledIcon';
import {useNavigation} from '@react-navigation/native';

const UserHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackIcon />
      </Pressable>
      <View style={styles.actionContainer}>
        <Pressable style={styles.shareBox}>
          <ShareIcon />
        </Pressable>
        <HeartFilledIcon />
      </View>
    </View>
  );
};

export default UserHeader;
