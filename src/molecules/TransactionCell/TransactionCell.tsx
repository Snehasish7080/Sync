import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './TransactionCellStyles';
import AppText from '../../atoms/AppText/AppText';

const TransactionCell = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.profileImage}
        />
        <View>
          <AppText style={styles.title}>Placed Order #5689588875564</AppText>
          <AppText style={styles.desc}>03/02/2024 at 10:24pm</AppText>
        </View>
      </View>
      <AppText style={styles.price}>₹50</AppText>
    </View>
  );
};

export default TransactionCell;
