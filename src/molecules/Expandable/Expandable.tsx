import {Image, Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './ExpandableStyles';
import BackIcon from '../../atoms/BackIcon/BackIcon';
import AppText from '../../atoms/AppText/AppText';

type ExpandableProps = {
  isOpen: boolean;
  onPress: () => void;
  showImage: boolean;
};
const Expandable: React.FC<ExpandableProps> = ({
  isOpen,
  onPress,
  showImage,
}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      {showImage && (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.image}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <AppText style={styles.text} numberOfLines={isOpen ? undefined : 6}>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattisWorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
          mattisWorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eu turpis molestie, dictum est a, mattisWorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
          mattis
        </AppText>
        <View
          style={[
            styles.iconContainer,
            {
              transform: [
                {
                  rotate: isOpen ? '90deg' : '-90deg',
                },
              ],
            },
          ]}>
          <BackIcon size={24} />
        </View>
      </View>
    </Pressable>
  );
};

export default Expandable;
