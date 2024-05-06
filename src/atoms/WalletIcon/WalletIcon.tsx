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
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.1666 6.75H5.16663C3.92399 6.75 2.91663 7.75736 2.91663 9V18C2.91663 19.2426 3.92399 20.25 5.16663 20.25H20.1666C21.4093 20.25 22.4166 19.2426 22.4166 18V9C22.4166 7.75736 21.4093 6.75 20.1666 6.75Z" stroke="#71717A" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M19.9491 6.74999V5.34374C19.949 4.99884 19.8728 4.65821 19.7259 4.34616C19.579 4.03411 19.365 3.75834 19.0992 3.5385C18.8334 3.31867 18.5224 3.16021 18.1884 3.07441C17.8543 2.98862 17.5054 2.97762 17.1666 3.04218L4.82163 5.14921C4.28553 5.25138 3.80189 5.53742 3.45412 5.95801C3.10635 6.3786 2.91626 6.90737 2.91663 7.45312V9.74999" stroke="#6B7280" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M17.9166 15C17.62 15 17.3299 14.912 17.0833 14.7472C16.8366 14.5824 16.6443 14.3481 16.5308 14.074C16.4173 13.7999 16.3876 13.4983 16.4454 13.2074C16.5033 12.9164 16.6462 12.6491 16.856 12.4393C17.0657 12.2296 17.333 12.0867 17.624 12.0288C17.915 11.9709 18.2166 12.0006 18.4907 12.1142C18.7647 12.2277 18.999 12.42 19.1638 12.6666C19.3287 12.9133 19.4166 13.2033 19.4166 13.5C19.4166 13.8978 19.2586 14.2794 18.9773 14.5607C18.696 14.842 18.3145 15 17.9166 15Z" fill="#71717A"/>
  </svg>
`,
)!;

type WalletIconTypes = {
  color?: string;
};

const WalletIcon: React.FC<WalletIconTypes> = ({
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

export default WalletIcon;
