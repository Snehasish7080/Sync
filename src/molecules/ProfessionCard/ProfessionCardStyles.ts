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
    paddingBottom: '16@vs',
  },
  userStatus: {
    height: 22,
    backgroundColor: colors.userStatus.waiting,
    alignSelf: 'flex-start',
    paddingHorizontal: '10@s',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userStatusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '13@vs',
  },
  userStatusText: {
    color: colors.white.main,
    fontSize: getFontSize(12),
    fontFamily: fontFamily.poppinsMedium,
    marginRight: '2@s',
  },
  profileImage: {
    width: '80@s',
    height: '80@s',
    borderRadius: '40@s',
    resizeMode: 'cover',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '12@vs',
  },
  ratingText: {
    fontFamily: fontFamily.poppinsMedium,
    marginLeft: '4@s',
    marginTop: 2,
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  availableText: {
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.available.offline,
    textAlign: 'center',
    marginTop: '2@vs',
  },
  onlineText: {
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.available.online,
    textAlign: 'center',
    marginTop: '2@vs',
  },

  infocontainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: getFontSize(18),
    fontFamily: fontFamily.poppinsSemiBold,
    marginBottom: '10@vs',
  },
  usercontent: {
    marginLeft: '26@s',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '29@vs',
  },
  professionText: {
    marginLeft: '8@s',
    marginTop: 1,
  },
  notifyBtn: {
    width: '100%',
    height: '42@vs',
    paddingHorizontal: '15@s',
  },
  chatBtn: {
    height: '42@vs',
    paddingHorizontal: '8@s',
    flex: 1,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  favContainer: {
    position: 'absolute',
    top: '16@s',
    right: '16@s',
  },
  chatLableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  chatLable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatLableText: {
    fontSize: getFontSize(18),
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.primary.main,
    marginRight: '4@s',
  },
  callLableText: {
    fontSize: getFontSize(18),
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.white.main,
    marginRight: '4@s',
  },
  price: {
    fontFamily: fontFamily.poppinsMedium,
    color: colors.primary.main,
    marginLeft: '8@s',
  },
  callPrice: {
    fontFamily: fontFamily.poppinsMedium,
    color: colors.white.main,
    marginLeft: '8@s',
  },
  videoBtn: {
    marginLeft: '10@s',
  },
});
