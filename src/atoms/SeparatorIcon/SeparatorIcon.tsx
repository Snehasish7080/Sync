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
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="0.494141" y1="22.0056" x2="44.4941" y2="22.0056" stroke="#D4D4D8"/>
  <line x1="23" y1="0.5" x2="23" y2="44.5" stroke="#D4D4D8"/>
  </svg>
`,
)!;

const SeparatorIcon: React.FC = () => {
  const src = rect(0, 0, 45, 45);
  const dst = rect(0, 0, 45, 45);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(colors.grey.textInputBorder),
      BlendMode.SrcIn,
    ),
  );
  return (
    <Canvas style={{width: 45, height: 45}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={45} height={45} />
      </Group>
    </Canvas>
  );
};

export default SeparatorIcon;
