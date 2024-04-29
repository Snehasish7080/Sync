import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    paddingHorizontal: '16@s',
    width: '100%',
    height: '233@vs',
    // borderWidth: 1,
    borderColor: colors.grey.cardBorder,
    borderRadius: 12,
  },
});
