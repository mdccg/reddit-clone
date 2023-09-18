import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const EllipsisVerticalSolidIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 128 512" {...props}>
    <Path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
  </Svg>
);

export default EllipsisVerticalSolidIcon;