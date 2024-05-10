import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './HistoryCardStyles';
import AppText from '../../atoms/AppText/AppText';
import AppOutlineButton from '../../atoms/AppOutlineButton/AppOutlineButton';
import RestartIcon from '../../atoms/RestartIcon/RestartIcon';

const HistoryCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.profileImage}
        />
        <View style={styles.nameContainer}>
          <AppText style={styles.name}>Karishma</AppText>
          <AppText style={styles.dateTime}>03/02/2024 at 10:24pm</AppText>
        </View>
      </View>
      <AppOutlineButton style={styles.restartBtn}>
        <View style={styles.restartLabel}>
          <AppText style={styles.restartText}>Restart</AppText>
          <RestartIcon />
        </View>
      </AppOutlineButton>
    </View>
  );
};

export default HistoryCard;
