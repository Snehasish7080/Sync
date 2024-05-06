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

const HomeScreen = () => {
  const listHeaderComponent = () => {
    return <SearchTextInput />;
  };
  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <ProfessionCard isOffline={item.isOffline} />;
        }}
        ListHeaderComponent={listHeaderComponent()}
        ItemSeparatorComponent={() => itemSeparator()}
        contentContainerStyle={styles.flatlistContainerStyle}
        ListHeaderComponentStyle={styles.flatlistHeaderStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
