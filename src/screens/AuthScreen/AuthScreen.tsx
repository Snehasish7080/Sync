import {View} from 'react-native';
import React from 'react';
import {styles} from './AuthScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import {useForm} from 'react-hook-form';
import AppTextInput from '../../atoms/AppTextInput/AppTextInput';
import {verticalScale} from 'react-native-size-matters';
import AppButton from '../../atoms/AppButton/AppButton';
import {UnAuthenticatedNavProps} from '../../navigations/UnAuthenticated/UnAuthenticatedTypes';

type loginData = {
  mobile: string;
};
const AuthScreen: React.FC<UnAuthenticatedNavProps<'AuthScreen'>> = ({
  navigation,
}) => {
  const {control, handleSubmit} = useForm<loginData>({
    defaultValues: {
      mobile: '',
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: loginData) => {
    console.log(data);
    navigation.navigate('OtpVerificationScreen', {
      opt: '1111',
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View>
          <AppText style={styles.heading}>Account</AppText>
          <AppText style={styles.subHeading}>
            Login/Create an account to get started
          </AppText>
        </View>
        <View style={styles.inputContainer}>
          <AppTextInput
            name={'mobile'}
            control={control}
            lable="Mobile Number"
            labelStyle={{
              marginTop: verticalScale(20),
            }}
            placeholder="Enter Mobile Number"
            keyboardType="number-pad"
            style={styles.textInput}
          />
          <AppButton
            style={styles.authBtn}
            onPress={() => {
              handleSubmit(onSubmit)();
            }}>
            Get OTP
          </AppButton>
        </View>
      </View>
      <View style={styles.termsContainer}>
        <AppText style={styles.termsText}>
          By Signing up, you agree to our
        </AppText>
        <AppText style={styles.termsLink}>Terms of service</AppText>
        <AppText style={styles.termsText}>and</AppText>
        <AppText style={styles.termsLink}>Privacy Policy</AppText>
      </View>
    </View>
  );
};

export default AuthScreen;
