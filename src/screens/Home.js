import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Box } from '../components/base';

function Home() {
  return (
    <Box
      flex={1}
      bg="white"
      as={SafeAreaView}
    >
        <Text>{'Welcome'} </Text>
    </Box>
  );
}

export default Home;
