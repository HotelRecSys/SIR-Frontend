import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Box } from '../../components/base';

function SignIn() {
  return (
    <Box
      flex={1}
      bg="white"
      as={SafeAreaView}
    >
        <Text>{'SignInPage'} </Text>
    </Box>
  );
}

export default SignIn;
