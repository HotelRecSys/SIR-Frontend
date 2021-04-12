import { Text as T } from 'react-native';
import styled from 'styled-components/native';
import {
  compose, color, size, typography, space, flexbox, border,
} from 'styled-system';

const Text = styled(T)(compose(typography, space, border, flexbox, color, size));

export default Text;
