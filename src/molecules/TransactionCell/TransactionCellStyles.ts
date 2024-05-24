import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    // paddingHorizontal: '10@s',
    paddingBottom: '14@vs',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14@vs',
  },
  profileImage: {
    width: '50@s',
    height: '50@s',
    borderRadius: '25@s',
    marginRight: '16@s',
  },
  title: {
    color: colors.grey.label,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
  desc: {
    color: colors.grey.icon,
    fontSize: getFontSize(13),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: getFontSize(16),
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.grey.icon,
  },
});
