import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.background,
    borderWidth: 1,
    height: '50@vs',
    borderRadius: 6,
    padding: '4@s',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selector: {
    position: 'absolute',
    backgroundColor: colors.primary.main,
    width: '156@s',
    height: '42@vs',
    borderRadius: 6,
    right: '4@s',
    top: '4@s',
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
    height: '100%',
  },
  selectorText: {
    fontSize: getFontSize(20),
    fontFamily: fontFamily.poppinsSemiBold,
    marginRight: '4@s',
  },
});
