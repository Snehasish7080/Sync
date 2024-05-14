import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  text: {
    flex: 1,
    fontSize: getFontSize(15),
    color: colors.grey.label,
  },
});
