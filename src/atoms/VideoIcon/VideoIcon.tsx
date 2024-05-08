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
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.91669 6.87501C1.91669 6.15671 2.20203 5.46784 2.70994 4.95992C3.21785 4.45201 3.90673 4.16667 4.62502 4.16667H10.0417C10.3974 4.16667 10.7495 4.23673 11.0781 4.37283C11.4067 4.50894 11.7053 4.70843 11.9568 4.95992C12.2083 5.21142 12.4078 5.50998 12.5439 5.83857C12.68 6.16716 12.75 6.51934 12.75 6.87501V13.125C12.75 13.4807 12.68 13.8328 12.5439 14.1614C12.4078 14.49 12.2083 14.7886 11.9568 15.0401C11.7053 15.2916 11.4067 15.4911 11.0781 15.6272C10.7495 15.7633 10.3974 15.8333 10.0417 15.8333H4.62502C3.90673 15.8333 3.21785 15.548 2.70994 15.0401C2.20203 14.5322 1.91669 13.8433 1.91669 13.125V6.87501ZM16.2975 14.74L13.5834 12.8667V7.13501L16.2975 5.26084C17.265 4.59251 18.585 5.28584 18.585 6.46084V13.54C18.585 14.715 17.265 15.4083 16.2975 14.74Z" fill="white"/>
  </svg>
`,
)!;

type VideoIconProps = {
  size?: number;
  color?: string;
};
const VideoIcon: React.FC<VideoIconProps> = ({
  color = colors.white.main,
  size = 18,
}) => {
  const src = rect(0, 0, 21, 20);
  const dst = rect(0, 0, size, size);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: size + 1, height: size}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={size + 1} height={size} />
      </Group>
    </Canvas>
  );
};

export default VideoIcon;
