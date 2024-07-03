import React, {FC} from 'react';
import {View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';

type ChatCardProps = {
  fromUser: boolean;
};
const ChatCard: FC<ChatCardProps> = ({fromUser}) => {
  return (
    <View
      style={[styles.mainContainer, fromUser && styles.userCardMainContainer]}>
      <View
        style={[styles.cardContainer, fromUser && styles.userCardContainer]}>
        <AppText>
          Worem ipsum dolor sit amet, ddfbg v consectetur adipiscing elit. Etiam
          eu bgn idsb
        </AppText>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    width: '100%',
    marginBottom: 10,
  },
  cardContainer: {
    width: '80%',
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.grey.cardBorder,
  },
  userCardMainContainer: {
    backgroundColor: colors.white.main,
    width: '100%',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  userCardContainer: {
    width: '80%',
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.primary.light,
  },
});
