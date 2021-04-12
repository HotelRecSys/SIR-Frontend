import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  position,
  layout,
  border,
  borderRadius,
  grid,
} from 'styled-system';

const Box = styled(View)(
  compose(layout, color, grid, size, position, flexbox, border, borderRadius, space),
);

export default Box;
