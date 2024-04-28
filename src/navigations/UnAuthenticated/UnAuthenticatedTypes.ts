import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type UnAuthenticatedRouteList = {
  AuthScreen: undefined;
  OtpVerificationScreen: {opt: string};
};

export type UnAuthenticatedNavigationProp<
  T extends keyof UnAuthenticatedRouteList,
> = NativeStackScreenProps<UnAuthenticatedRouteList, T>;

export type UnAuthenticatedNavProps<T extends keyof UnAuthenticatedRouteList> =
  NativeStackScreenProps<UnAuthenticatedRouteList, T>;
