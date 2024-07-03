import {ScrollView, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import ChatCard from '../../molecules/ChatCard/ChatCard';

const ChatScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <ChatCard fromUser={false} />
        <ChatCard fromUser={false} />
        <ChatCard fromUser={true} />
        <ChatCard fromUser={true} />
        <ChatCard fromUser={false} />
        <ChatCard fromUser={false} />
        <ChatCard fromUser={false} />
        <ChatCard fromUser={true} />
        <ChatCard fromUser={true} />
        <ChatCard fromUser={true} />
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: '16@s',
    paddingVertical: 24,
  },
});
