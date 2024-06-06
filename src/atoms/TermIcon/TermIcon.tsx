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
  <path d="M23.3332 14V6.70717C23.3332 6.61508 23.3151 6.52387 23.2799 6.43879C23.2447 6.35371 23.193 6.27641 23.1278 6.21133L19.4552 2.53867C19.324 2.40735 19.1461 2.3335 18.9605 2.33333H5.3665C5.18085 2.33333 5.0028 2.40708 4.87153 2.53836C4.74025 2.66963 4.6665 2.84768 4.6665 3.03333V24.9667C4.6665 25.1523 4.74025 25.3304 4.87153 25.4616C5.0028 25.5929 5.18085 25.6667 5.3665 25.6667H12.8332M9.33317 11.6667H18.6665M9.33317 7H13.9998M9.33317 16.3333H12.8332M20.9462 19.7633L22.1128 18.5967C22.2342 18.475 22.3784 18.3784 22.5372 18.3125C22.6959 18.2466 22.8661 18.2127 23.038 18.2127C23.2099 18.2127 23.3801 18.2466 23.5388 18.3125C23.6976 18.3784 23.8418 18.475 23.9632 18.5967C24.0847 18.718 24.1811 18.8621 24.2469 19.0208C24.3127 19.1794 24.3465 19.3495 24.3465 19.5212C24.3465 19.693 24.3127 19.8631 24.2469 20.0217C24.1811 20.1803 24.0847 20.3245 23.9632 20.4458L22.7965 21.6125L20.9462 19.7622L17.4567 23.2517C17.2822 23.4267 17.1678 23.6526 17.13 23.8968L16.8453 25.7133L18.6618 25.4298C18.9061 25.392 19.132 25.2776 19.307 25.1032L22.7953 21.6125" stroke="#3F3F46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6665 2.33333V6.3C18.6665 6.48565 18.7403 6.6637 18.8715 6.79497C19.0028 6.92625 19.1809 7 19.3665 7H23.3332" stroke="#3F3F46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
)!;

type TermIconProps = {
  size?: number;
};
const TermIcon: React.FC<TermIconProps> = ({size = 28}) => {
  const src = rect(0, 0, 28, 28);
  const dst = rect(0, 0, size, size);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(colors.grey.main), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: size, height: size}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={size} height={size} />
      </Group>
    </Canvas>
  );
};

export default TermIcon;
