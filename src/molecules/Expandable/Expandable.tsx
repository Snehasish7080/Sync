import {Image, Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './ExpandableStyles';
import BackIcon from '../../atoms/BackIcon/BackIcon';
import AppText from '../../atoms/AppText/AppText';

type ExpandableProps = {
  isOpen: boolean;
  onPress: () => void;
};
const Expandable: React.FC<ExpandableProps> = ({isOpen, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <AppText style={styles.text} numberOfLines={isOpen ? undefined : 6}>
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattisWorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam eu turpis molestie, dictum est a, mattisWorem
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattisWorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
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
    </Pressable>
  );
};

export default Expandable;
