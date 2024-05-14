import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    color: colors.grey.main,
    fontSize: getFontSize(20),
    fontFamily: fontFamily.poppinsSemiBold,
  },
  scrollviewStyle: {
    // flex: 1,
    paddingHorizontal: '16@s',
    backgroundColor: colors.white.main,
    paddingBottom: '24@vs',
  },
  profileImage: {
    width: '90@s',
    height: '90@s',
    borderRadius: '45@s',
  },
  userInfoCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grey.textInputBorder,
    borderRadius: '12@s',
    paddingHorizontal: '20@s',
    paddingVertical: '20@vs',
    marginTop: '14@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: colors.grey.main,
    fontSize: getFontSize(18),
    fontFamily: fontFamily.poppinsSemiBold,
    marginTop: '12@vs',
  },
  profession: {
    color: colors.grey.icon,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
  userImageBox: {
    alignItems: 'center',
    width: '90@s',
    // marginRight: '30@s',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    color: colors.grey.label,
    fontSize: getFontSize(20),
    fontFamily: fontFamily.poppinsSemiBold,
  },
  numberLabel: {
    color: colors.grey.label,
    fontSize: getFontSize(13),
  },
  numberContainer: {
    alignItems: 'center',
    width: '69@s',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flex: 1,
    height: '100%',
    marginLeft: '30@s',
  },
  separatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '44@vs',
    position: 'relative',
  },
  separator: {
    top: '5@vs',
  },
  infoIcon: {
    marginLeft: '4@s',
    marginTop: 2,
  },
  bioCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grey.textInputBorder,
    borderRadius: '12@s',
    marginTop: '12@vs',
    padding: '16@s',
  },
  title: {
    color: colors.grey.main,
    fontSize: getFontSize(18),
    fontFamily: fontFamily.poppinsSemiBold,
    marginBottom: '6@vs',
  },
  location: {
    fontSize: getFontSize(15),
    fontFamily: fontFamily.poppinsMedium,
    color: colors.grey.label,
    marginLeft: '6@s',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bio: {
    fontSize: getFontSize(15),
    color: colors.grey.label,
    marginTop: '8@vs',
  },
});
