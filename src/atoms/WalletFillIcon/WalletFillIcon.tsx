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
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.95312 10.25H38.9531C39.3036 10.2498 39.6536 10.2721 40.0013 10.3166C39.8834 9.48947 39.5993 8.6948 39.1661 7.98048C38.7328 7.26616 38.1594 6.64697 37.4804 6.16025C36.8014 5.67352 36.0309 5.32935 35.2152 5.14847C34.3996 4.96759 33.5558 4.95376 32.7347 5.1078L8.0625 9.31999H8.03437C6.48569 9.61615 5.1085 10.4924 4.18406 11.7697C5.57681 10.779 7.24401 10.2478 8.95312 10.25ZM38.9531 12.5H8.95312C7.36236 12.5017 5.83724 13.1344 4.7124 14.2593C3.58756 15.3841 2.95486 16.9092 2.95312 18.5V36.5C2.95486 38.0908 3.58756 39.6159 4.7124 40.7407C5.83724 41.8656 7.36236 42.4983 8.95312 42.5H38.9531C40.5439 42.4983 42.069 41.8656 43.1938 40.7407C44.3187 39.6159 44.9514 38.0908 44.9531 36.5V18.5C44.9514 16.9092 44.3187 15.3841 43.1938 14.2593C42.069 13.1344 40.5439 12.5017 38.9531 12.5ZM34.5 30.5C33.9067 30.5 33.3266 30.324 32.8333 29.9944C32.3399 29.6648 31.9554 29.1962 31.7284 28.648C31.5013 28.0999 31.4419 27.4967 31.5576 26.9147C31.6734 26.3328 31.9591 25.7982 32.3787 25.3787C32.7982 24.9591 33.3328 24.6734 33.9147 24.5576C34.4967 24.4419 35.0999 24.5013 35.6481 24.7284C36.1962 24.9554 36.6648 25.3399 36.9944 25.8333C37.3241 26.3266 37.5 26.9066 37.5 27.5C37.5 28.2956 37.1839 29.0587 36.6213 29.6213C36.0587 30.1839 35.2957 30.5 34.5 30.5Z" fill="#1D4ED8"/>
  <path d="M3 24.8281V15.5C3 13.4684 4.125 10.0625 8.02969 9.32469C11.3438 8.70312 14.625 8.70312 14.625 8.70312C14.625 8.70312 16.7812 10.2031 15 10.2031C13.2188 10.2031 13.2656 12.5 15 12.5C16.7344 12.5 15 14.7031 15 14.7031L8.01562 22.625L3 24.8281Z" fill="#1D4ED8"/>
  </svg>
`,
)!;

type WalletFillIconTypes = {
  color?: string;
  width?: number;
  height?: number;
};

const WalletFillIcon: React.FC<WalletFillIconTypes> = ({
  color = colors.primary.main,
  height = 49,
  width = 48,
}) => {
  const src = rect(0, 0, 48, 49);
  const dst = rect(0, 0, width, height);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: width, height: height}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={width} height={height} />
      </Group>
    </Canvas>
  );
};

export default WalletFillIcon;
