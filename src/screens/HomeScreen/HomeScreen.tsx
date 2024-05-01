import {FlatList, View} from 'react-native';
import React from 'react';
import {styles} from './HomeScreenStyles';
import ProfessionCard from '../../molecules/ProfessionCard/ProfessionCard';

const data = [
  {
    isOffline: true,
  },
  {
    isOffline: false,
  },
];
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <ProfessionCard isOffline={item.isOffline} />;
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default HomeScreen;
