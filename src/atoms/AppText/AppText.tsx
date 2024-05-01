import {Text, TextProps} from 'react-native';
import React from 'react';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';
import {colors} from '../../utils/theme/colors';

type AppTextProps = TextProps;
const AppText = ({children, ...props}: AppTextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily.poppinsRegular,
          fontSize: getFontSize(14),
          color: colors.grey.main,
        },
        props.style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;
