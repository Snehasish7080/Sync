import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '10@vs',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: '60@s',
    height: '60@s',
    borderRadius: '30@s',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: '16@s',
  },
  name: {
    color: colors.grey.main,
    fontSize: getFontSize(16),
    fontFamily: fontFamily.poppinsMedium,
  },
  dateTime: {
    color: colors.grey.icon,
    fontSize: getFontSize(13),
  },
  restartBtn: {
    borderColor: colors.success.main,
    borderWidth: 1.5,
    width: '106@s',
    height: '39@vs',
  },
  restartLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restartText: {
    color: colors.success.main,
    fontSize: getFontSize(16),
    fontFamily: fontFamily.poppinsSemiBold,
    marginRight: '4@s',
  },
});
