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
  <path d="M14.0002 12.8333H19.8335M14.0002 8.16667H19.8335M9.3335 17.5V4.2C9.3335 4.01435 9.40725 3.8363 9.53852 3.70503C9.6698 3.57375 9.84785 3.5 10.0335 3.5H23.8002C23.9858 3.5 24.1639 3.57375 24.2951 3.70503C24.4264 3.8363 24.5002 4.01435 24.5002 4.2V19.8333C24.5002 21.071 24.0085 22.258 23.1333 23.1332C22.2582 24.0083 21.0712 24.5 19.8335 24.5" stroke="#3F3F46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83333 17.5H14.4667C14.8528 17.5 15.1702 17.8115 15.2017 18.1965C15.3452 19.9675 16.0767 24.5 19.8333 24.5H7C6.07174 24.5 5.1815 24.1313 4.52513 23.4749C3.86875 22.8185 3.5 21.9283 3.5 21V19.8333C3.5 19.2145 3.74583 18.621 4.18342 18.1834C4.621 17.7458 5.21449 17.5 5.83333 17.5Z" stroke="#3F3F46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,
)!;

type PrivacyIconProps = {
  size?: number;
};
const PrivacyIcon: React.FC<PrivacyIconProps> = ({size = 28}) => {
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

export default PrivacyIcon;
