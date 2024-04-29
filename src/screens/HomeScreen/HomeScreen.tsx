import {View} from 'react-native';
import React from 'react';
import {styles} from './HomeScreenStyles';
import ProfessionCard from '../../molecules/ProfessionCard/ProfessionCard';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ProfessionCard />
    </View>
  );
};

export default HomeScreen;
