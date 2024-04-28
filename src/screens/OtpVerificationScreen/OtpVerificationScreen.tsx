import {View} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {styles} from './OtpVerificationScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import AppButton from '../../atoms/AppButton/AppButton';
import OtpInput from '../../atoms/OtpInput/OtpInput';

type otpData = {
  otp: string;
};
const OtpVerificationScreen = () => {
  const {control, handleSubmit} = useForm<otpData>({
    defaultValues: {
      otp: '',
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: otpData) => {
    console.log(data);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View>
          <AppText style={styles.heading}>OTP Verification</AppText>
          <AppText style={styles.subHeading}>
            Enter OTP send to 0********0
          </AppText>
        </View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="otp"
            render={({field: {onChange}}) => {
              return <OtpInput onChange={onChange} />;
            }}
          />

          <View style={styles.resendOtpContainer}>
            <AppText style={styles.resendOtpText}>Didn’t receive OTP? </AppText>
            <AppText style={styles.resendOtpLink}>Resend OTP</AppText>
          </View>
          <AppButton
            style={styles.authBtn}
            onPress={() => {
              handleSubmit(onSubmit)();
            }}>
            Verify
          </AppButton>
        </View>
      </View>
    </View>
  );
};

export default OtpVerificationScreen;
