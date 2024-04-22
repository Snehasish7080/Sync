import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParentRouteList} from './ParentTypes';
import UnAuthenticatedNavigation from '../UnAuthenticated/UnAuthenticated';

const Stack = createNativeStackNavigator<ParentRouteList>();

const ParentNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'UnAuthenticated'}>
      <Stack.Screen
        name="UnAuthenticated"
        component={UnAuthenticatedNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ParentNavigation;
