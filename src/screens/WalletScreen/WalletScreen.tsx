import {Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './WalletScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import WalletFillIcon from '../../atoms/WalletFillIcon/WalletFillIcon';
import AppTextInput from '../../atoms/AppTextInput/AppTextInput';
import {useForm} from 'react-hook-form';
import AppOutlineButton from '../../atoms/AppOutlineButton/AppOutlineButton';
import TransactionCell from '../../molecules/TransactionCell/TransactionCell';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from '../../navigations/Authenticated/AuthenticatedTypes';

type cashData = {
  amount: string;
};
const WalletScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticatedRouteList>>();
  const {control, handleSubmit} = useForm<cashData>({
    defaultValues: {
      amount: '',
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: cashData) => {
    console.log(data);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cashContainer}>
          <View>
            <AppText style={styles.cashHeading}>App Cash</AppText>
            <AppText style={styles.cash}>₹0.00</AppText>
          </View>
          <WalletFillIcon />
        </View>

        <View style={styles.inputContainer}>
          <AppTextInput
            name={'amount'}
            control={control}
            placeholder="Enter amount"
            keyboardType="number-pad"
            // style={styles.textInput}
          />
          <View style={styles.amountContainer}>
            <View style={styles.amount}>
              <AppText style={styles.amountText}>₹ 50</AppText>
            </View>
            <View style={styles.amount}>
              <AppText style={styles.amountText}>₹ 100</AppText>
            </View>
            <View style={styles.amount}>
              <AppText style={styles.amountText}>₹ 500</AppText>
            </View>
            <View style={styles.amount}>
              <AppText style={styles.amountText}>₹ 1000</AppText>
            </View>
          </View>

          <AppOutlineButton style={styles.btn} textStyle={styles.btnText}>
            Add Money
          </AppOutlineButton>
        </View>

        <View style={styles.titleSection}>
          <AppText style={styles.title}>Your Transactions</AppText>
          <Pressable
            onPress={() => {
              navigation.navigate('TransactionScreen');
            }}>
            <AppText style={styles.link}>See all</AppText>
          </Pressable>
        </View>

        <View style={styles.cellContainer}>
          <TransactionCell />
          <TransactionCell />
          <TransactionCell />
          <TransactionCell />
        </View>
      </ScrollView>
    </View>
  );
};

export default WalletScreen;
