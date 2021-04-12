import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  color,
  size,
  typography,
  position,
  space,
  flexbox,
  border,
  borderRadius,
} from 'styled-system';

const Input = styled(TextInput).attrs(() => ({
  placeholderTextColor: '#555',
}))(compose(color, size, flexbox, position, typography, border, borderRadius, space));

export default Input;
