import {View} from 'react-native';
import React from 'react';
import {styles} from './HistoryScreenStyles';
import AppTabSwitch from '../../molecules/AppTabSwitch/AppTabSwitch';

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <AppTabSwitch />
    </View>
  );
};

export default HistoryScreen;
