import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    height: '54@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '22@s',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareBox: {
    marginRight: '20@s',
  },
});
