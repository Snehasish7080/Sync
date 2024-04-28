import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthenticatedRouteList} from './UnAuthenticatedTypes';
import AuthScreen from '../../screens/AuthScreen/AuthScreen';
import OtpVerificationScreen from '../../screens/OtpVerificationScreen/OtpVerificationScreen';

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
      <Stack.Screen
        name="OtpVerificationScreen"
        component={OtpVerificationScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticated;
