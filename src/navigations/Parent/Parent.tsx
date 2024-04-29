import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParentRouteList} from './ParentTypes';
import UnAuthenticated from '../UnAuthenticated/UnAuthenticated';
import Authenticated from '../Authenticated/Authenticated';

const Stack = createNativeStackNavigator<ParentRouteList>();

const ParentNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'UnAuthenticated'}>
      <Stack.Screen
        name="UnAuthenticated"
        component={UnAuthenticated}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Authenticated"
        component={Authenticated}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ParentNavigation;
