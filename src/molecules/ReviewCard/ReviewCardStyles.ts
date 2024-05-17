import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    width: '280@s',
    borderWidth: 1,
    borderColor: colors.grey.textInputBorder,
    padding: '16@s',
    borderRadius: '12@s',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agoText: {
    fontSize: getFontSize(13),
    color: colors.grey.label,
    marginLeft: '6@s',
  },
  review: {
    flex: 1,
    fontSize: getFontSize(14),
    color: colors.grey.label,
    marginTop: '16@vs',
  },
  profileImage: {
    width: '50@s',
    height: '50@s',
    borderRadius: '25@s',
    marginRight: '16@s',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '12@vs',
  },
  location: {
    fontSize: getFontSize(13),
    color: colors.grey.icon,
  },
  userName: {
    fontSize: getFontSize(16),
    color: colors.grey.main,
  },
});
