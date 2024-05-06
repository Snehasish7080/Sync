import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';

export const styles = ScaledSheet.create({
  mainContainer: {
    height: '60@vs',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white.main,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: '16@s',
    overflow: 'hidden',
    borderTopRightRadius: '16@s',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '26@s',
    justifyContent: 'space-between',
    height: '60@vs',
    backgroundColor: colors.white.main,
    borderWidth: 0.5,
    borderTopRightRadius: '16@s',
    borderTopLeftRadius: '16@s',
    borderBottomWidth: 0,
    borderColor: colors.grey.bottomBarBorder,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
});
