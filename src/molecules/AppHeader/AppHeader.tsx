import {Pressable, StyleProp, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import BackIcon from '../../atoms/BackIcon/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {styles} from './AppHeaderStyles';
import AppText from '../../atoms/AppText/AppText';

type AppHeaderProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
};
const AppHeader: FC<AppHeaderProps> = ({title, style}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.mainContainer, style]}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackIcon />
      </Pressable>
      <View style={styles.actionContainer}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
};

export default AppHeader;
