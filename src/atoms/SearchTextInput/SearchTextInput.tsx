import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {Control, Controller} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {getFontSize} from '../../utils/theme/fontScale';
import {colors} from '../../utils/theme/colors';
import AppText from '../AppText/AppText';
import {fontFamily} from '../../utils/theme/fontFamily';
import SearchIcon from '../SearchIcon/SearchIcon';

const SearchTextInput: React.FC = () => {
  return (
    <View style={[styles.textInputBox]}>
      <AppText style={styles.placeholder}>Search</AppText>
      <SearchIcon />
    </View>
  );
};

const styles = ScaledSheet.create({
  textInputBox: {
    height: 54,
    borderRadius: 18,
    paddingHorizontal: 20,
    backgroundColor: colors.white.main,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeholder: {
    color: colors.grey.placeholder,
    fontSize: getFontSize(18),
  },
});

export default SearchTextInput;
