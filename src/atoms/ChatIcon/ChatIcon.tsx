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
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.75001 1.5C13.8923 1.5 17.25 4.85775 17.25 9C17.25 13.1423 13.8923 16.5 9.75001 16.5C8.53668 16.5016 7.34122 16.2076 6.26701 15.6435L3.04951 16.4813C2.942 16.5093 2.82904 16.5087 2.72182 16.4796C2.61461 16.4505 2.51686 16.3938 2.43827 16.3153C2.35967 16.2368 2.30296 16.1391 2.27376 16.0319C2.24455 15.9247 2.24386 15.8118 2.27176 15.7042L3.10876 12.4875C2.54314 11.4121 2.24837 10.215 2.25001 9C2.25001 4.85775 5.60776 1.5 9.75001 1.5ZM10.689 9.75H7.31251L7.23601 9.75525C7.10137 9.77377 6.978 9.84042 6.88869 9.94285C6.79938 10.0453 6.75018 10.1766 6.75018 10.3125C6.75018 10.4484 6.79938 10.5797 6.88869 10.6821C6.978 10.7846 7.10137 10.8512 7.23601 10.8698L7.31251 10.875H10.689L10.7648 10.8698C10.8994 10.8512 11.0228 10.7846 11.1121 10.6821C11.2014 10.5797 11.2506 10.4484 11.2506 10.3125C11.2506 10.1766 11.2014 10.0453 11.1121 9.94285C11.0228 9.84042 10.8994 9.77377 10.7648 9.75525L10.689 9.75ZM12.1875 7.125H7.31251L7.23601 7.13025C7.10137 7.14877 6.978 7.21542 6.88869 7.31785C6.79938 7.42029 6.75018 7.5516 6.75018 7.6875C6.75018 7.8234 6.79938 7.95471 6.88869 8.05715C6.978 8.15958 7.10137 8.22623 7.23601 8.24475L7.31251 8.25H12.1875L12.264 8.24475C12.3986 8.22623 12.522 8.15958 12.6113 8.05715C12.7006 7.95471 12.7498 7.8234 12.7498 7.6875C12.7498 7.5516 12.7006 7.42029 12.6113 7.31785C12.522 7.21542 12.3986 7.14877 12.264 7.13025L12.1875 7.125Z" fill="#1D4ED8"/>
  </svg>
`,
)!;

type ChatIconProps = {
  size?: number;
  color?: string;
};
const ChatIcon: React.FC<ChatIconProps> = ({
  color = colors.primary.main,
  size = 18,
}) => {
  const src = rect(0, 0, 19, 18);
  const dst = rect(0, 0, size, size);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );
  return (
    <Canvas style={{width: size, height: size}}>
      <Group layer={paint} transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={size} height={size} />
      </Group>
    </Canvas>
  );
};

export default ChatIcon;
