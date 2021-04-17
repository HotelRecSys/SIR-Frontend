import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, Input, Button } from "../../components/base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box flex={1} bg="white" as={SafeAreaView} justifyContent="center" px={25}>
      <Text mb={20} fontSize={30} color="#295BE0" fontWeight={500}>
        Login
      </Text>
      <Box flexDirection="row" alignItems="center">
        <FontAwesomeIcon icon="at" size={20} color="#AFA5AD" />
        <Input
          p={10}
          ml={10}
          flex={1}
          placeholder="Email"
          style={{ borderColor: "#AFA5AD", borderWidth: 1, borderRadius: 5 }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </Box>

      <Box  mt={30} flexDirection="row" alignItems="center" >
        <FontAwesomeIcon icon="lock" size={20} color="#AFA5AD" />
        <Input
         
          p={10}
          ml={10}
          flex={1}
          placeholder="Password"
          secureTextEntry={true}
          style={{ borderColor: "#AFA5AD", borderWidth: 1, borderRadius: 5 }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Box>
      <Button
        mt={30}
        bg="#295BE0"
        p={12}
        style={{ borderColor: "#295BE0", borderRadius: 5 }}
      >
        <Text color="#FFF" fontSize={15} fontWeight={500}>
          {"Sign In"}
        </Text>
      </Button>
    </Box>
  );
}

export default SignIn;
