import {FlatList, View} from 'react-native';
import React from 'react';
import ProfessionCard from '../../molecules/ProfessionCard/ProfessionCard';
import {useNavigation} from '@react-navigation/native';
import {AuthenticatedRouteList} from '../../navigations/Authenticated/AuthenticatedTypes';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {styles} from './FavouriteScreenStyles';

const data = [
  {
    isOffline: true,
  },
  {
    isOffline: false,
  },
];

const FavouriteScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticatedRouteList>>();
  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <ProfessionCard
              isOffline={item.isOffline}
              onPress={() => {
                navigation.navigate('UserDetailScreen');
              }}
            />
          );
        }}
        ItemSeparatorComponent={() => itemSeparator()}
        contentContainerStyle={styles.flatlistContainerStyle}
        ListHeaderComponentStyle={styles.flatlistHeaderStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavouriteScreen;
