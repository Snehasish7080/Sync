import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  ImageSVG,
  rect,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {colors} from '../../utils/theme/colors';

const Icon = Skia.SVG.MakeFromString(
  `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
)!;

type ProfileIconTypes = {
  color?: string;
};
const ProfileIcon: React.FC<ProfileIconTypes> = ({
  color = colors.grey.bottomTabBarIcon,
}) => {
  const src = rect(0, 0, 24, 24);
  const dst = rect(0, 0, 24, 24);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 24, height: 24}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={24} height={24} />
      </Group>
    </Canvas>
  );
};

export default ProfileIcon;
