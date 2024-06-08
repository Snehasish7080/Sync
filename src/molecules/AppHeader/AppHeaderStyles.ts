import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.background,
    height: '54@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '22@s',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  shareBox: {
    marginRight: '20@s',
  },
  title: {
    fontSize: getFontSize(23),
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.grey.main,
    textAlign: 'center',
  },
});
