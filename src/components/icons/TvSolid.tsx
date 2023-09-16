import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const TvSolidIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.fill}
        d="M19 6h-4.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-3 10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Zm3 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
      />
    </Svg>
  );
}

export default TvSolidIcon;