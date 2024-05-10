import {FlatList, View} from 'react-native';
import React from 'react';
import {styles} from './HistoryScreenStyles';
import AppTabSwitch from '../../molecules/AppTabSwitch/AppTabSwitch';
import HistoryCard from '../../molecules/HistoryCard/HistoryCard';

const HistoryScreen = () => {
  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.mainContainer}>
      <AppTabSwitch />
      <FlatList
        data={['1', '2', '3', '4']}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return <HistoryCard />;
        }}
        ItemSeparatorComponent={() => itemSeparator()}
        contentContainerStyle={styles.flatlistContainerStyle}
      />
    </View>
  );
};

export default HistoryScreen;
