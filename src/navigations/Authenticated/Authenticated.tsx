import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from './AuthenticatedTypes';
import TabNavigation from '../TabNavigation/TabNavigation';

const Stack = createNativeStackNavigator<AuthenticatedRouteList>();

const Authenticated = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreenNavigation">
      <Stack.Screen
        name="HomeScreenNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
