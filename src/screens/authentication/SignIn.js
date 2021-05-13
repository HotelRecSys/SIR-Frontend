import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Box,
  Input,
  Button,
  BottomSheetArea,
} from "../../components";
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView } from "react-native-gesture-handler";
const { height } = Dimensions.get("window");

const sheetRef = React.createRef();


function SignIn({ isOpen, setOpen, setSignUpOpen }) {
 
  useEffect(() => {
    sheetRef.current.snapTo(0);
  }, [isOpen]);

  const Content = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState({
      renderErrorMessage: false,
      errorMessage: "",
    });
    const [passwordError, setPasswordError] = useState({
      renderErrorMessage: false,
      errorMessage: "",
    });
     

    return(
    <Box flex={1} bg="white" height={height} px={25}>
      <Box mb={35}>
        <Text mb={10} fontSize={20} color="#191B32" fontWeight="bold">
          Welcome SIR Hotel App
        </Text>
        <Text fontSize={15} color="#AFA5AD" fontWeight={500}>
          Sign in to continue
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Input
          p={10}
          ml={10}
          flex={1}
          label="Email"
          placeholder="Ex:sir@gmail.com"
          labelStyle={{ fontSize: 13, color: "#A9B9CD" }}
          inputStyle={{ fontSize: 15, color: "#191B32" }}
          inputContainerStyle={{ borderColor: "#DCE5EE" }}
          errorStyle={{ color: "red" }}
          renderErrorMessage={emailError.renderErrorMessage}
          errorMessage={emailError.errorMessage}
          leftIcon={<FontAwesomeIcon icon="at" size={20} color="#A9B9CD" />}
          value={values.email}
          onChangeText={(text) => setValues({ ...values, email: text })}
        />
      </Box>

      <Box mt={30} flexDirection="row" alignItems="center">
        <Input
          p={10}
          ml={10}
          flex={1}
          label="Password"
          placeholder="*******"
          labelStyle={{ fontSize: 13, color: "#A9B9CD" }}
          inputStyle={{ fontSize: 15, color: "#191B32" }}
          inputContainerStyle={{ borderColor: "#DCE5EE" }}
          leftIcon={<FontAwesomeIcon icon="lock" size={20} color="#A9B9CD" />}
          rightIcon={
            showPassword ? (
              <Button onPress={() => setShowPassword(false)}>
                <FontAwesomeIcon icon="eye-slash" size={20} color="#A9B9CD" />
              </Button>
            ) : (
              <Button onPress={() => setShowPassword(true)}>
                <FontAwesomeIcon icon="eye" size={20} color="#A9B9CD" />
              </Button>
            )
          }
          secureTextEntry={!showPassword}
          errorStyle={{ color: "red" }}
          renderErrorMessage={passwordError.renderErrorMessage}
          errorMessage={passwordError.errorMessage}
          value={values.password}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />
      </Box>
      <Button
        mt={30}
        bg="#295BE0"
        py={15}
        style={{ borderColor: "#295BE0", borderRadius: 10 }}
      >
        <Text color="#FFF" fontSize={15} fontWeight={500}>
          {"Sign In"}
        </Text>
      </Button>
      <Button mt={10} bg="#FFF" p={12}>
        <Text color="#A9B9CD" fontSize={15} fontWeight={500}>
          {"Forgot Password ?"}
        </Text>
      </Button>

      <Button
        mt={20}
        bg="#FFF"
        py={15}
        style={{ borderColor: "#295BE0", borderWidth: 1, borderRadius: 10 }}
        onPress={() => {
          setOpen(false);
          setSignUpOpen(true);
        }}
      >
        <Text color="#295BE0" fontSize={15} fontWeight={500}>
          {"Sign Up"}
        </Text>
      </Button>
    </Box>
  );}

  return (
    <BottomSheetArea
      sheetRef={sheetRef}
      snapPoints={["70%", "35%", "0"]}
      onCloseEnd={() => setOpen(false)}
      // header={BottomSheetFilterHeader}
      // headerStyle={{
      //   backgroundColor: colors.primary,
      //   paddingBottom: 0
      // }}
      renderContent={() => <Content />}
    />
  );
}

export default SignIn;
