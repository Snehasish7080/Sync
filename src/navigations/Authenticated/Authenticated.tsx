import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedRouteList} from './AuthenticatedTypes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator<AuthenticatedRouteList>();

const Authenticated = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
