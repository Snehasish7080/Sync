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
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.6666 8L10.6666 16L18.6666 24" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
)!;

const BackIcon: React.FC = () => {
  const src = rect(0, 0, 32, 32);
  const dst = rect(0, 0, 32, 32);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(colors.grey.main), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 32, height: 32}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={32} height={32} />
      </Group>
    </Canvas>
  );
};

export default BackIcon;
