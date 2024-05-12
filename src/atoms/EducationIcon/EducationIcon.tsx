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
  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.8125 16.4375H12.75V14.8438C12.7492 14.1395 12.469 13.4644 11.9711 12.9664C11.4731 12.4685 10.798 12.1883 10.0938 12.1875H6.90625C6.20203 12.1883 5.52689 12.4685 5.02893 12.9664C4.53097 13.4644 4.25084 14.1395 4.25 14.8438V16.4375H3.1875V14.8438C3.18862 13.8578 3.58078 12.9126 4.27794 12.2154C4.9751 11.5183 5.92032 11.1261 6.90625 11.125H10.0938C11.0797 11.1261 12.0249 11.5183 12.7221 12.2154C13.4192 12.9126 13.8114 13.8578 13.8125 14.8438V16.4375ZM2.65625 3.6875C2.51535 3.6875 2.38023 3.74347 2.2806 3.8431C2.18097 3.94273 2.125 4.07785 2.125 4.21875V9H3.1875V4.21875C3.1875 4.07785 3.13153 3.94273 3.0319 3.8431C2.93227 3.74347 2.79715 3.6875 2.65625 3.6875Z" fill="#3F3F46"/>
  <path d="M2.125 1.5625V2.625H4.78125V6.34375C4.78125 7.33002 5.17305 8.2759 5.87045 8.9733C6.56785 9.6707 7.51373 10.0625 8.5 10.0625C9.48627 10.0625 10.4322 9.6707 11.1296 8.9733C11.827 8.2759 12.2188 7.33002 12.2188 6.34375V2.625H14.875V1.5625H2.125ZM5.84375 2.625H11.1562V4.21875H5.84375V2.625ZM8.5 9C7.79552 9 7.11989 8.72015 6.62175 8.222C6.1236 7.72386 5.84375 7.04823 5.84375 6.34375V5.28125H11.1562V6.34375C11.1562 7.04823 10.8764 7.72386 10.3783 8.222C9.88011 8.72015 9.20448 9 8.5 9Z" fill="#3F3F46"/>
  </svg>
`,
)!;

const EducationIcon: React.FC = () => {
  const src = rect(0, 0, 17, 18);
  const dst = rect(0, 0, 17, 18);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(colors.grey.main), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: 17, height: 18}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={17} height={18} />
      </Group>
    </Canvas>
  );
};

export default EducationIcon;
