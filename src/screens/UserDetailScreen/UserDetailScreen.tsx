import {FlatList, Image, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './UserDetailScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import InfoIcon from '../../atoms/InfoIcon/InfoIcon';
import RatingIcon from '../../atoms/RatingIcon/RatingIcon';
import {scale, verticalScale} from 'react-native-size-matters';
import SeparatorIcon from '../../atoms/SeparatorIcon/SeparatorIcon';
import LocationIcon from '../../atoms/LocationIcon/LocationIcon';
import EducationIcon from '../../atoms/EducationIcon/EducationIcon';
import Expandable from '../../molecules/Expandable/Expandable';
import {colors} from '../../utils/theme/colors';
import ReviewCard from '../../molecules/ReviewCard/ReviewCard';

const UserDetailScreen = () => {
  const [experienceDropdown, setExperienceDropdown] = useState(0);
  const handleExperience = (index: number) => {
    setExperienceDropdown(index);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollviewStyle}>
      <View style={styles.mainContainer}>
        <AppText style={styles.heading}>Know Your Counsellor</AppText>
        <View style={styles.userInfoCard}>
          <View style={styles.userImageBox}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.profileImage}
            />
            <AppText style={styles.userName}>Deepika</AppText>
            <AppText style={styles.profession}>Lawyer</AppText>
          </View>
          <View style={styles.userInfoContainer}>
            <View style={styles.ratingContainer}>
              <View style={styles.numberContainer}>
                <AppText style={styles.numberText}>50</AppText>
                <View style={styles.iconContainer}>
                  <AppText style={[styles.numberLabel]}>Reviews</AppText>
                  <View style={styles.infoIcon}>
                    <InfoIcon />
                  </View>
                </View>
              </View>
              <View style={styles.numberContainer}>
                <View style={styles.iconContainer}>
                  <AppText style={[styles.numberText, {marginRight: scale(4)}]}>
                    4.8
                  </AppText>
                  <RatingIcon />
                </View>
                <AppText style={styles.numberLabel}>Rating</AppText>
              </View>
            </View>
            <View style={styles.separatorContainer}>
              <View style={styles.separator}>
                <SeparatorIcon />
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <View style={styles.numberContainer}>
                <AppText style={styles.numberText}>145</AppText>
                <AppText style={styles.numberLabel}>Orders</AppText>
              </View>
              <View style={styles.numberContainer}>
                <AppText style={[styles.numberText]}>6K</AppText>
                <AppText style={styles.numberLabel}>Mins</AppText>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bioCard}>
          <AppText style={styles.title}>Bio</AppText>
          <View
            style={[
              styles.locationContainer,
              {marginBottom: verticalScale(4)},
            ]}>
            <LocationIcon />
            <AppText style={styles.location}>Kanpur</AppText>
          </View>
          <View style={styles.locationContainer}>
            <EducationIcon />
            <AppText style={styles.location}>Education</AppText>
          </View>
          <AppText style={styles.bio} numberOfLines={6}>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condiment ad lito
          </AppText>
        </View>
        <View style={styles.bioCard}>
          <AppText style={styles.title}>Experience</AppText>
          {[1, 2].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  paddingBottom: !index ? verticalScale(8) : 0,
                  marginBottom: !index ? verticalScale(8) : 0,
                  borderBottomWidth: !index ? 1 : 0,
                  borderColor: colors.grey.cardBorder,
                }}>
                <Expandable
                  isOpen={experienceDropdown === item}
                  onPress={() => {
                    if (experienceDropdown === item) {
                      handleExperience(0);
                    } else {
                      handleExperience(item);
                    }
                  }}
                  showImage={false}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.bioCard}>
          <AppText style={styles.title}>Achievments</AppText>
          {[1, 2].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  paddingBottom: !index ? verticalScale(8) : 0,
                  marginBottom: !index ? verticalScale(8) : 0,
                  borderBottomWidth: !index ? 1 : 0,
                  borderColor: colors.grey.cardBorder,
                }}>
                <Expandable
                  isOpen={experienceDropdown === item}
                  onPress={() => {
                    if (experienceDropdown === item) {
                      handleExperience(0);
                    } else {
                      handleExperience(item);
                    }
                  }}
                  showImage={true}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.reviewTitleContainer}>
          <AppText style={styles.title}>Reviews</AppText>
          <AppText style={styles.seeAllLink}>see all</AppText>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={['1', '2', '3', '4', '5']}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return <ReviewCard />;
          }}
          ItemSeparatorComponent={() => <View style={{width: 12}} />}
        />
      </View>
    </ScrollView>
  );
};

export default UserDetailScreen;
