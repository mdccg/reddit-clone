import { BoxProps } from '@shopify/restyle';
import { Theme } from '../stylesheets/theme';
import FatherProps from '../types/FatherProps';
import Box from './Box';

type Props = BoxProps<Theme> & FatherProps;

const CenteredBox: React.FC<Props> = (props) => (
  <Box
    justifyContent="center"
    alignItems="center"
    flex={1}
    {...props}
  >
    {props.children}
  </Box>
);

export default CenteredBox;