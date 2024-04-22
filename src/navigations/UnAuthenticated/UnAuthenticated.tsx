import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthenticatedRouteList} from './UnAuthenticatedTypes';
import AuthScreen from '../../screens/AuthScreen/AuthScreen';

const Stack = createNativeStackNavigator<UnAuthenticatedRouteList>();

const UnAuthenticated = () => {
  return (
    <Stack.Navigator initialRouteName="AuthScreen">
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticated;
