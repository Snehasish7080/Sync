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
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.57143 5.5C4.57143 6.29565 4.93265 7.05871 5.57563 7.62132C6.21862 8.18393 7.09069 8.5 8 8.5C8.90931 8.5 9.78138 8.18393 10.4244 7.62132C11.0673 7.05871 11.4286 6.29565 11.4286 5.5C11.4286 4.70435 11.0673 3.94129 10.4244 3.37868C9.78138 2.81607 8.90931 2.5 8 2.5C7.09069 2.5 6.21862 2.81607 5.57563 3.37868C4.93265 3.94129 4.57143 4.70435 4.57143 5.5ZM7.10268 10.1922L7.60089 10.9188L6.70893 13.8227L5.74464 10.3797C5.69107 10.1898 5.48214 10.0656 5.26518 10.1148C3.39018 10.525 2 12.0109 2 13.7805C2 14.1789 2.36964 14.5 2.82232 14.5H13.1777C13.633 14.5 14 14.1766 14 13.7805C14 12.0109 12.6098 10.525 10.7348 10.1148C10.5179 10.068 10.3089 10.1922 10.2554 10.3797L9.29107 13.8227L8.39911 10.9188L8.89732 10.1922C9.06875 9.94141 8.8625 9.625 8.53036 9.625H7.47232C7.14018 9.625 6.93393 9.94375 7.10536 10.1922H7.10268Z" fill="#18181B"/>
  </svg>
`,
)!;

const ProfessionIcon: React.FC = () => {
  const src = rect(0, 0, 16, 16);
  const dst = rect(0, 0, 16, 16);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(colors.grey.main), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 16, height: 16}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={16} height={16} />
      </Group>
    </Canvas>
  );
};

export default ProfessionIcon;
