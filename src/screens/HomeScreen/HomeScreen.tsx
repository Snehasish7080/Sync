import {FlatList, View} from 'react-native';
import React from 'react';
import {styles} from './HomeScreenStyles';
import ProfessionCard from '../../molecules/ProfessionCard/ProfessionCard';
import SearchTextInput from '../../atoms/SearchTextInput/SearchTextInput';

const data = [
  {
    isOffline: true,
  },
  {
    isOffline: false,
  },
];

type searchData = {
  search: string;
};
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <ProfessionCard isOffline={item.isOffline} />;
        }}
        ListHeaderComponent={() => <SearchTextInput />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.flatlistContainerStyle}
        ListHeaderComponentStyle={styles.flatlistHeaderStyle}
      />
    </View>
  );
};

export default HomeScreen;
