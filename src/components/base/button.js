import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  position, border,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.87,
}))(compose(color, border, size, flexbox, space, position, layout, borderRadius));

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
