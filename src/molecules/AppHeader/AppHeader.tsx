import {Pressable, View} from 'react-native';
import React, {FC} from 'react';
import BackIcon from '../../atoms/BackIcon/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {styles} from './AppHeaderStyles';
import AppText from '../../atoms/AppText/AppText';

type AppHeaderProps = {
  title?: string;
};
const AppHeader: FC<AppHeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
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
