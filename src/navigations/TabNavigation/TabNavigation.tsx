import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabNavigationRouteList} from './TabNavigatonTypes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import HistoryScreen from '../../screens/HistoryScreen/HistoryScreen';
import WalletScreen from '../../screens/WalletScreen/WalletScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import AppBottomTabBar from '../../molecules/AppBottomBar/AppBottomBar';
import ExploreIcon from '../../atoms/ExploreIcon/ExploreIcon';
import HistoryIcon from '../../atoms/TimerIcon/TimerIcon';
import WalletIcon from '../../atoms/WalletIcon/WalletIcon';

import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';
import {colors} from '../../utils/theme/colors';
import AppText from '../../atoms/AppText/AppText';
import {fontFamily} from '../../utils/theme/fontFamily';

const Tab = createBottomTabNavigator<TabNavigationRouteList>();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => {
        return <AppBottomTabBar {...props} />;
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ExploreIcon color={focused ? colors.primary.main : undefined} />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <AppText
                style={{
                  fontFamily: focused
                    ? fontFamily.poppinsSemiBold
                    : fontFamily.poppinsMedium,
                  color: focused ? colors.primary.main : colors.grey.subHeading,
                }}>
                Explore
              </AppText>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <HistoryIcon
                size={24}
                color={
                  focused ? colors.primary.main : colors.grey.bottomTabBarIcon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <AppText
                style={{
                  fontFamily: focused
                    ? fontFamily.poppinsSemiBold
                    : fontFamily.poppinsMedium,
                  color: focused ? colors.primary.main : colors.grey.subHeading,
                }}>
                History
              </AppText>
            );
          },
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <WalletIcon color={focused ? colors.primary.main : undefined} />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <AppText
                style={{
                  fontFamily: focused
                    ? fontFamily.poppinsSemiBold
                    : fontFamily.poppinsMedium,
                  color: focused ? colors.primary.main : colors.grey.subHeading,
                }}>
                Wallet
              </AppText>
            );
          },
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({focused}) => {
            return (
              <ProfileIcon color={focused ? colors.primary.main : undefined} />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <AppText
                style={{
                  fontFamily: focused
                    ? fontFamily.poppinsSemiBold
                    : fontFamily.poppinsMedium,
                  color: focused ? colors.primary.main : colors.grey.subHeading,
                }}>
                Profile
              </AppText>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
