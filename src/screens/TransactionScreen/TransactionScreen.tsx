import {ScrollView, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import TransactionCell from '../../molecules/TransactionCell/TransactionCell';

const TransactionScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
        <TransactionCell />
      </ScrollView>
    </View>
  );
};

export default TransactionScreen;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: '16@s',
    paddingVertical: 24,
  },
});
