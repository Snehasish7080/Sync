import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.background,
    flex: 1,
    paddingVertical: '24@vs',
    paddingHorizontal: '16@s',
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
