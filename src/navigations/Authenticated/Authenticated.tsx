import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from './AuthenticatedTypes';
import TabNavigation from '../TabNavigation/TabNavigation';
import UserDetailScreen from '../../screens/UserDetailScreen/UserDetailScreen';
import UserHeader from '../../molecules/UserHeader/UserHeader';

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
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          headerShown: true,
          header: () => <UserHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
