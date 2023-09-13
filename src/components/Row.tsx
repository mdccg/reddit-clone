import { BoxProps } from '@shopify/restyle';
import { Theme } from '../stylesheets/theme';
import FatherProps from '../types/FatherProps';
import Box from './Box';

type Props = BoxProps<Theme> & FatherProps;

const Row: React.FC<Props> = (props) => (
  <Box
    flexDirection="row"
    alignItems="center"
    {...props}
  >
    {props.children}
  </Box>
);

export default Row;