import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './ProfessionCardStyles';
import AppText from '../../atoms/AppText/AppText';
import TimerIcon from '../../atoms/TimerIcon/TimerIcon';
import RatingIcon from '../../atoms/RatingIcon/RatingIcon';
import ProfessionIcon from '../../atoms/ProfessionIcon/ProfessionIcon';
import ExperienceIcon from '../../atoms/ExperienceIcon/ExperienceIcon';
import LanguageIcon from '../../atoms/LanguageIcon/LanguageIcon';
import AppOutlineButton from '../../atoms/AppOutlineButton/AppOutlineButton';
import HeartIcon from '../../atoms/HeartIcon/HeartIcon';
import ChatIcon from '../../atoms/ChatIcon/ChatIcon';
import AppButton from '../../atoms/AppButton/AppButton';
import VideoIcon from '../../atoms/VideoIcon/VideoIcon';

type ProfessionCardProps = {
  isOffline: boolean;
  onPress: () => void;
};
const ProfessionCard: React.FC<ProfessionCardProps> = ({
  isOffline,
  onPress,
}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <View style={styles.favContainer}>
        <HeartIcon />
      </View>
      <View style={styles.userStatusContainer}>
        {!isOffline && (
          <View style={styles.userStatus}>
            <AppText style={styles.userStatusText}>Waiting</AppText>
            <TimerIcon />
          </View>
        )}
      </View>
      <View style={styles.infocontainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.profileImage}
          />
          <View style={styles.ratingContainer}>
            <RatingIcon />
            <AppText style={styles.ratingText}>4.8</AppText>
          </View>
          {isOffline && <AppText style={styles.availableText}>Offline</AppText>}
          {!isOffline && <AppText style={styles.onlineText}>Online</AppText>}
        </View>
        <View style={styles.usercontent}>
          <AppText style={styles.nameText}>Deepak Singh</AppText>
          <View style={styles.iconContainer}>
            <ProfessionIcon />
            <AppText style={styles.professionText}>Profession</AppText>
          </View>
          <View style={styles.iconContainer}>
            <ExperienceIcon />
            <AppText style={styles.professionText}>Experience</AppText>
          </View>
          <View style={styles.iconContainer}>
            <LanguageIcon />
            <AppText style={styles.professionText}>Language</AppText>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        {isOffline && (
          <AppOutlineButton style={styles.notifyBtn}>Notify</AppOutlineButton>
        )}
        {!isOffline && (
          <AppOutlineButton style={styles.chatBtn}>
            <View style={styles.chatLableContainer}>
              <View style={styles.chatLable}>
                <AppText style={styles.chatLableText}>Chat</AppText>
                <ChatIcon />
              </View>
              <AppText style={styles.price}>₹ 22/min</AppText>
            </View>
          </AppOutlineButton>
        )}
        {!isOffline && (
          <AppButton style={[styles.chatBtn, styles.videoBtn]}>
            <View style={styles.chatLableContainer}>
              <View style={styles.chatLable}>
                <AppText style={styles.callLableText}>Call</AppText>
                <VideoIcon />
              </View>
              <AppText style={styles.callPrice}>₹ 22/min</AppText>
            </View>
          </AppButton>
        )}
      </View>
    </Pressable>
  );
};

export default ProfessionCard;
