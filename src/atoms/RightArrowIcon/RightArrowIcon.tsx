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
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 7L17.5 14L10.5 21" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
)!;

type RightArrowIconProps = {
  size?: number;
};
const RightArrowIcon: React.FC<RightArrowIconProps> = ({size = 28}) => {
  const src = rect(0, 0, 28, 28);
  const dst = rect(0, 0, size, size);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(colors.grey.icon), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: size, height: size}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={size} height={size} />
      </Group>
    </Canvas>
  );
};

export default RightArrowIcon;
