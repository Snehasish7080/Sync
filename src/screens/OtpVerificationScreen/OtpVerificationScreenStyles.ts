import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '16@s',
    paddingVertical: '90@vs',
  },
  contentContainer: {
    width: '100%',
  },
  heading: {
    color: colors.grey.heading,
    fontSize: getFontSize(28),
    fontFamily: fontFamily.poppinsSemiBold,
    textAlign: 'center',
    marginBottom: '14@vs',
  },
  subHeading: {
    color: colors.grey.subHeading,
    fontSize: getFontSize(15),
    marginBottom: '40@vs',
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
  },
  authBtn: {
    width: '100%',
    marginTop: '36@vs',
  },
  inputContainer: {
    width: '100%',
  },
  resendOtpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40@vs',
  },
  resendOtpText: {
    color: colors.grey.label,
    fontSize: getFontSize(14),
  },
  resendOtpLink: {
    color: colors.primary.main,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
});
