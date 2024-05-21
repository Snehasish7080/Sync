import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    paddingHorizontal: '16@s',
    paddingVertical: '24@vs',
  },
  cashContainer: {
    backgroundColor: colors.primary.light,
    padding: '16@s',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '12@s',
  },
  cashHeading: {
    color: colors.grey.label,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
  cash: {
    fontSize: getFontSize(23),
    color: colors.grey.main,
    fontFamily: fontFamily.poppinsSemiBold,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey.textInputBorder,
    borderRadius: '12@s',
    marginTop: '12@vs',
    padding: '16@s',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '24@vs',
  },
  amount: {
    paddingHorizontal: '12@s',
    height: '31@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.grey.amountBorder,
    borderRadius: '5@s',
  },
  amountText: {
    fontSize: getFontSize(16),
    color: colors.grey.main,
    fontFamily: fontFamily.poppinsMedium,
  },
});
