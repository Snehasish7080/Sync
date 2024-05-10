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
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.99999 3.00001C10.575 3.00001 12.075 3.60001 13.2 4.72501C15.525 7.05001 15.525 10.875 13.2 13.2C11.85 14.625 9.97499 15.15 8.17499 14.925L8.54999 13.425C9.82499 13.575 11.175 13.125 12.15 12.15C13.875 10.425 13.875 7.57501 12.15 5.77501C11.325 4.95001 10.125 4.50001 8.99999 4.50001V7.95001L5.24999 4.20001L8.99999 0.450012V3.00001ZM4.72499 13.2C2.77499 11.25 2.47499 8.25001 3.82499 5.92501L4.94999 7.05001C4.12499 8.70001 4.42499 10.8 5.84999 12.15C6.22499 12.525 6.67499 12.825 7.19999 13.05L6.74999 14.55C5.99999 14.25 5.32499 13.8 4.72499 13.2Z" fill="#22BB33"/>
  </svg>
`,
)!;

const RestartIcon: React.FC = () => {
  const src = rect(0, 0, 18, 18);
  const dst = rect(0, 0, 18, 18);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(colors.success.main),
      BlendMode.SrcIn,
    ),
  );
  return (
    <Canvas style={{width: 18, height: 18}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={18} height={18} />
      </Group>
    </Canvas>
  );
};

export default RestartIcon;
