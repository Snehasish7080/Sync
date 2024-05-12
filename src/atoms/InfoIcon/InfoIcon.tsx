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
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 12.75C9.8995 12.75 12.25 10.3995 12.25 7.5C12.25 4.6005 9.8995 2.25 7 2.25C4.1005 2.25 1.75 4.6005 1.75 7.5C1.75 10.3995 4.1005 12.75 7 12.75Z" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 5.16666H7.00583V5.17249H7V5.16666Z" stroke="#3F3F46" stroke-linejoin="round"/>
  <path d="M7 7.5V9.83333" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
)!;

const InfoIcon: React.FC = () => {
  const src = rect(0, 0, 14, 15);
  const dst = rect(0, 0, 14, 15);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(colors.grey.label), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 14, height: 15}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={14} height={15} />
      </Group>
    </Canvas>
  );
};

export default InfoIcon;
