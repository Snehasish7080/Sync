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
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  enableSharedTransition?: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AppOutlineButton = ({
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
      {typeof children === 'string' && (
        <AppText style={[styles.btnText, textStyle]}>{children}</AppText>
      )}

      {typeof children !== 'string' && children}
    </AnimatedPressable>
  );
};

const styles = ScaledSheet.create({
  btn: {
    width: scale(248),
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.white.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary.main,
  },
  btnText: {
    color: colors.primary.main,
    fontSize: getFontSize(15),
    fontFamily: fontFamily.poppinsSemiBold,
    width: '100%',
    textAlign: 'center',
  },
});

export default AppOutlineButton;
