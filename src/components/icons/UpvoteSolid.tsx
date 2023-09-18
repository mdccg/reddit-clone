import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UpvoteSolidIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      d="M12.78 2.375c-.38-.475-1.18-.475-1.561 0l-8 10A1.002 1.002 0 0 0 3.999 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .782-1.625l-8-10Z"
    />
  </Svg>
);

export default UpvoteSolidIcon;