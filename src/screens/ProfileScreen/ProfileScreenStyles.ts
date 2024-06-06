import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    paddingHorizontal: '16@s',
  },
  profileImage: {
    width: '80@s',
    height: '80@s',
    borderRadius: '40@s',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: '24@vs',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grey.cardBorder,
    paddingBottom: '10@vs',
  },
  userName: {
    color: colors.grey.main,
    fontSize: getFontSize(20),
  },
  mobile: {
    color: colors.grey.label,
    fontSize: getFontSize(14),
  },
  infoContainer: {
    marginLeft: '16@s',
  },
  walletIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10@vs',
    borderBottomWidth: 1,
    borderColor: colors.grey.textInputBorder,
  },
  wallerContainer: {
    backgroundColor: colors.primary.light,
    padding: '16@s',
    borderRadius: '12@s',
  },
  appcash: {
    fontSize: getFontSize(18),
    color: colors.grey.main,
    fontFamily: fontFamily.poppinsSemiBold,
    marginLeft: '12@s',
  },
  cash: {
    fontSize: getFontSize(23),
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.grey.main,
  },
  btn: {
    borderWidth: 1.5,
    width: '113@s',
    height: '35@vs',
    borderRadius: '6@s',
    backgroundColor: 'transparent',
  },
  btnText: {
    fontSize: getFontSize(16),
    fontFamily: fontFamily.poppinsSemiBold,
  },
  cashContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10@vs',
  },
  optionContainer: {
    marginTop: '26@vs',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '15@vs',
    borderTopWidth: 1,
    borderColor: colors.grey.cardBorder,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: colors.grey.label,
    fontSize: getFontSize(18),
    fontFamily: fontFamily.poppinsMedium,
    marginLeft: '16@s',
  },
});
