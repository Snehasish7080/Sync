import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './ProfileScreenStyles';
import AppText from '../../atoms/AppText/AppText';

const ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <AppText style={styles.userName}>Karishma</AppText>
            <AppText style={styles.mobile}>4859483456</AppText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
