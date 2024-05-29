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
});
