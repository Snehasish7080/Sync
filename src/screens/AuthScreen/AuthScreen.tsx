import {View} from 'react-native';
import React from 'react';
import {styles} from './AuthScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import {useForm} from 'react-hook-form';
import AppTextInput from '../../atoms/AppTextInput/AppTextInput';
import {verticalScale} from 'react-native-size-matters';
import AppButton from '../../atoms/AppButton/AppButton';

type loginData = {
  mobile: string;
};
const AuthScreen = () => {
  const {control, handleSubmit, setValue} = useForm<loginData>({
    defaultValues: {
      mobile: '',
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: loginData) => {
    console.log(data);
  };
  return (
    <View style={styles.mainContainer}>
      <AppText style={styles.heading}>Account</AppText>
      <AppText style={styles.subHeading}>
        Login/Create an account to get started
      </AppText>
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
      <AppButton style={styles.authBtn}>Get OTP</AppButton>
    </View>
  );
};

export default AuthScreen;
