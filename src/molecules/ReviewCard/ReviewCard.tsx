import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './ReviewCardStyles';
import RatingIcon from '../../atoms/RatingIcon/RatingIcon';
import AppText from '../../atoms/AppText/AppText';

const ReviewCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.ratingContainer}>
        <View style={styles.starContainer}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </View>
        <AppText style={styles.agoText}>1 day ago</AppText>
      </View>
      <AppText style={styles.review} numberOfLines={6}>
        Worem ipsum dolor sit amet, ddfbg v consectetur adipiscing elit. Etiam
        eu bgn idsb turpis molestie, dictum est a, mattis urpis molestie, dictum
        est dgy maurpimole alestie,dictum est a, ma
      </AppText>
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.profileImage}
        />
        <View>
          <AppText style={styles.userName}>Diksha</AppText>
          <AppText style={styles.location}>Kanpur</AppText>
        </View>
      </View>
    </View>
  );
};
export default ReviewCard;
