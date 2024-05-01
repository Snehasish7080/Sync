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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_280_656)">
  <path d="M5.72468 5.49067L7.45668 2.00267C7.5071 1.90172 7.58464 1.81682 7.68061 1.75748C7.77658 1.69814 7.88718 1.66671 8.00002 1.66671C8.11285 1.66671 8.22345 1.69814 8.31942 1.75748C8.41539 1.81682 8.49293 1.90172 8.54335 2.00267L10.2754 5.49067L14.1474 6.05333C14.259 6.06882 14.3641 6.1154 14.4506 6.18774C14.5371 6.26009 14.6015 6.35529 14.6364 6.46248C14.6714 6.56968 14.6755 6.68454 14.6483 6.79397C14.6212 6.90339 14.5638 7.00297 14.4827 7.08133L11.6813 9.79467L12.3427 13.628C12.4274 14.12 11.9074 14.4947 11.4627 14.2627L8.00002 12.452L4.53668 14.2627C4.09268 14.4953 3.57268 14.12 3.65735 13.6273L4.31868 9.794L1.51735 7.08067C1.43667 7.00225 1.37961 6.90277 1.35266 6.79354C1.3257 6.68431 1.32993 6.56971 1.36486 6.46276C1.39979 6.35582 1.46403 6.26082 1.55026 6.18856C1.6365 6.1163 1.74127 6.06968 1.85268 6.054L5.72468 5.49067Z" fill="#EAB308" stroke="#EAB308" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_280_656">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>
`,
)!;

const RatingIcon: React.FC = () => {
  const src = rect(0, 0, 16, 16);
  const dst = rect(0, 0, 16, 16);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color('#EAB308'), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 16, height: 16}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={16} height={16} />
      </Group>
    </Canvas>
  );
};

export default RatingIcon;
