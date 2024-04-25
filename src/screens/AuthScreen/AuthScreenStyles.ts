import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '16@s',
  },
  heading: {
    color: colors.grey.heading,
    fontSize: getFontSize(28),
    fontFamily: fontFamily.poppinsSemiBold,
  },
  subHeading: {
    color: colors.grey.subHeading,
    fontSize: getFontSize(15),
    marginBottom: '114@vs',
  },
  textInput: {
    width: '100%',
  },
  authBtn: {
    width: '100%',
    marginTop: '36@vs',
  },
});
