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
  <g clip-path="url(#clip0_287_1446)">
  <path d="M5.44423 4.33334H5.11089V4.66667V23.3333V23.6667H5.44423H19.0646C19.0082 23.8656 18.9017 24.0488 18.7529 24.1976C18.5237 24.4268 18.2128 24.5556 17.8887 24.5556H5.44423C5.12007 24.5556 4.8092 24.4268 4.57999 24.1976C4.35077 23.9684 4.22201 23.6575 4.22201 23.3333V4.66667C4.22201 4.34252 4.35077 4.03164 4.57999 3.80243C4.8092 3.57322 5.12007 3.44445 5.44423 3.44445H17.8887C18.2128 3.44445 18.5237 3.57322 18.7529 3.80243C18.9821 4.03164 19.1109 4.34252 19.1109 4.66667V11.9556H18.222V4.66667V4.33334H17.8887H5.44423Z" fill="#3F3F46" stroke="#3F3F46" stroke-width="0.666667"/>
  <path d="M21.9022 13.44C21.7534 13.3126 21.5621 13.246 21.3663 13.2536C21.1706 13.2611 20.9849 13.3423 20.8464 13.4808C20.7078 13.6193 20.6267 13.805 20.6191 14.0007C20.6116 14.1965 20.6782 14.3879 20.8056 14.5367L23.4345 17.1111H12.1567C11.9504 17.1111 11.7526 17.1931 11.6067 17.3389C11.4609 17.4848 11.3789 17.6826 11.3789 17.8889C11.3789 18.0952 11.4609 18.293 11.6067 18.4389C11.7526 18.5847 11.9504 18.6667 12.1567 18.6667H23.4345L20.8056 21.3578C20.7242 21.4275 20.658 21.5133 20.6113 21.6098C20.5647 21.7063 20.5384 21.8114 20.5343 21.9185C20.5301 22.0256 20.5482 22.1324 20.5873 22.2322C20.6264 22.3321 20.6857 22.4227 20.7615 22.4985C20.8373 22.5743 20.928 22.6336 21.0278 22.6727C21.1276 22.7118 21.2344 22.7299 21.3415 22.7257C21.4486 22.7216 21.5537 22.6954 21.6502 22.6487C21.7467 22.602 21.8325 22.5359 21.9022 22.4544L26.4445 17.9433L21.9022 13.44Z" fill="#3F3F46"/>
  </g>
  <defs>
  <clipPath id="clip0_287_1446">
  <rect width="28" height="28" fill="white"/>
  </clipPath>
  </defs>
  </svg>
`,
)!;

type LogoutIconProps = {
  size?: number;
};
const LogoutIcon: React.FC<LogoutIconProps> = ({size = 28}) => {
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

export default LogoutIcon;
