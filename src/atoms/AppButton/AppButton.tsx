import {
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';
import Animated from 'react-native-reanimated';

type AppButtonProps = PressableProps & {
  children: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  enableSharedTransition?: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AppButton = ({
  children,
  style,
  textStyle,
  enableSharedTransition = false,
  ...props
}: AppButtonProps) => {
  return (
    <AnimatedPressable
      sharedTransitionTag={enableSharedTransition ? 'transitionBtn' : undefined}
      style={[styles.btn, style]}
      {...props}>
      <AppText style={[styles.btnText, textStyle]}>{children}</AppText>
    </AnimatedPressable>
  );
};

const styles = ScaledSheet.create({
  btn: {
    width: scale(248),
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white.main,
    fontSize: getFontSize(15),
    fontFamily: fontFamily.poppinsSemiBold,
    width: '100%',
    textAlign: 'center',
  },
});

export default AppButton;
