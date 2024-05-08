import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './AppTabSwitchStyles';
import AppText from '../../atoms/AppText/AppText';
import VideoIcon from '../../atoms/VideoIcon/VideoIcon';
import ChatIcon from '../../atoms/ChatIcon/ChatIcon';
import {colors} from '../../utils/theme/colors';
import {scale} from 'react-native-size-matters';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AppTabSwitch = () => {
  const [selected, setSelected] = useState('Call');
  const animatedSlector = useSharedValue(0);

  const paddingValue = scale(4);
  const leftPadding = scale(156);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      left:
        selected === 'Call'
          ? withTiming(paddingValue, {
              duration: 400,
            })
          : withTiming(leftPadding, {
              duration: 400,
            }),
    };
  }, [selected]);

  const animatedCallStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        animatedSlector.value,
        [0, 1],
        [colors.white.main, colors.primary.main],
      ),
    };
  }, [animatedSlector]);
  const animatedChatStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        animatedSlector.value,
        [0, 1],
        [colors.primary.main, colors.white.main],
      ),
    };
  }, [animatedSlector]);

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.selector, animatedStyles]} />
      <Pressable
        style={styles.selectorContainer}
        onPress={() => {
          setSelected('Call');
          animatedSlector.value = withTiming(0, {duration: 400});
        }}>
        {/* <AppText
          style={[
            styles.selectorText,
            {
              color:
                selected === 'Call' ? colors.white.main : colors.primary.main,
            },
          ]}>
          Call
        </AppText> */}
        <Animated.Text style={[styles.selectorText, animatedCallStyle]}>
          Call
        </Animated.Text>

        <VideoIcon
          size={24}
          color={selected === 'Call' ? undefined : colors.primary.main}
        />
      </Pressable>
      <Pressable
        style={styles.selectorContainer}
        onPress={() => {
          setSelected('Chat');
          animatedSlector.value = withTiming(1, {duration: 400});
        }}>
        <Animated.Text style={[styles.selectorText, animatedChatStyle]}>
          Chat
        </Animated.Text>
        <ChatIcon
          size={24}
          color={selected === 'Chat' ? colors.white.main : undefined}
        />
      </Pressable>
    </View>
  );
};

export default AppTabSwitch;
