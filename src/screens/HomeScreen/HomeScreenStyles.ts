import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  separator: {
    height: '12@vs',
  },
  flatlistContainerStyle: {
    paddingHorizontal: '16@s',
    paddingVertical: '24@vs',
  },
  flatlistHeaderStyle: {
    marginBottom: '16@vs',
  },
});
