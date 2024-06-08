import {Image, Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './ProfileScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import WalletFillIcon from '../../atoms/WalletFillIcon/WalletFillIcon';
import AppOutlineButton from '../../atoms/AppOutlineButton/AppOutlineButton';
import HeartIcon from '../../atoms/HeartIcon/HeartIcon';
import RightArrowIcon from '../../atoms/RightArrowIcon/RightArrowIcon';
import ShareIcon from '../../atoms/ShareIcon/ShareIcon';
import TermIcon from '../../atoms/TermIcon/TermIcon';
import PrivacyIcon from '../../atoms/PrivacyIcon/PrivacyIcon';
import LogoutIcon from '../../atoms/LogoutIcon/LogoutIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from '../../navigations/Authenticated/AuthenticatedTypes';

const optionList = [
  {
    icon: () => <HeartIcon size={28} />,
    text: 'Favourites',
    navigation: 'FavouriteScreen',
  },
  {
    icon: () => <ShareIcon size={28} />,
    text: 'Share',
  },
  {
    icon: () => <TermIcon size={28} />,
    text: 'Term of Service',
  },
  {
    icon: () => <PrivacyIcon size={28} />,
    text: 'Privacy Policy',
  },
  {
    icon: () => <LogoutIcon size={28} />,
    text: 'Log Out',
  },
];
const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticatedRouteList>>();
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <AppText style={styles.userName}>Karishma</AppText>
            <AppText style={styles.mobile}>4859483456</AppText>
          </View>
        </View>
        <View style={styles.wallerContainer}>
          <View style={styles.walletIconContainer}>
            <WalletFillIcon width={48} height={48} />
            <AppText style={styles.appcash}>App Cash</AppText>
          </View>
          <View style={styles.cashContainer}>
            <AppText style={styles.cash}>₹0.00</AppText>
            <AppOutlineButton style={styles.btn} textStyle={styles.btnText}>
              Add Money
            </AppOutlineButton>
          </View>
        </View>

        <View style={styles.optionContainer}>
          {optionList.map((item, index) => {
            return (
              <Pressable
                style={styles.option}
                key={index}
                onPress={() => {
                  if (item?.navigation) {
                    navigation.navigate(
                      item.navigation as keyof AuthenticatedRouteList,
                    );
                  }
                }}>
                <View style={styles.iconContainer}>
                  {item.icon()}
                  <AppText style={styles.optionText}>{item.text}</AppText>
                </View>
                <RightArrowIcon />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
