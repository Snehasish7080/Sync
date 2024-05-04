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
  <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.875 22.375L18.2292 18.7291M17.7083 10.9166C17.7083 11.8742 17.5197 12.8224 17.1533 13.707C16.7868 14.5917 16.2497 15.3955 15.5727 16.0726C14.8956 16.7497 14.0917 17.2868 13.2071 17.6533C12.3224 18.0197 11.3742 18.2083 10.4167 18.2083C9.45911 18.2083 8.51093 18.0197 7.62627 17.6533C6.7416 17.2868 5.93777 16.7497 5.26068 16.0726C4.58359 15.3955 4.04649 14.5917 3.68005 13.707C3.3136 12.8224 3.125 11.8742 3.125 10.9166C3.125 8.98277 3.89323 7.1281 5.26068 5.76065C6.62813 4.3932 8.4828 3.62497 10.4167 3.62497C12.3505 3.62497 14.2052 4.3932 15.5727 5.76065C16.9401 7.1281 17.7083 8.98277 17.7083 10.9166Z" stroke="#A1A1AA" stroke-width="2.3" stroke-linecap="round"/>
  </svg>
`,
)!;

const SearchIcon: React.FC = () => {
  const src = rect(0, 0, 16, 16);
  const dst = rect(0, 0, 16, 16);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(colors.grey.placeholder),
      BlendMode.SrcIn,
    ),
  );
  return (
    <Canvas style={{width: 24, height: 24}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={24} height={24} />
      </Group>
    </Canvas>
  );
};

export default SearchIcon;
