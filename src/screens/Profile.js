import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Box } from '../components';

function Profile() {
  return (
    <Box
      flex={1}
      bg="white"
      as={SafeAreaView}
    >
        <Text>{'Profile'} </Text>
    </Box>
  );
}

export default Profile;
