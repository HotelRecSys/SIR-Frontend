import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, Input, Button } from "../../components";
import { ImageBackground } from "react-native";
import { SignIn, SignUp } from "../index";

function SplashScreen({ navigation }) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <Box flex={1} as={SafeAreaView} flexDirection={"column"}>
      <ImageBackground
        source={require("../../../assets/background2.png")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "flex-end",
          paddingBottom: "15%",
        }}
      >
        {signInOpen && (
          <SignIn
            isOpen={signInOpen}
            setOpen={setSignInOpen}
            setSignUpOpen={setSignUpOpen}
          />
        )}
        {signUpOpen && (
          <SignUp
            isOpen={signUpOpen}
            setOpen={setSignUpOpen}
            setSignInOpen={setSignInOpen}
          />
        )}
        {
          !signInOpen && !signUpOpen &&
          <>
            <Text
              ml={20}
              fontSize={30}
              color="#FFF"
              fontWeight={"bold"}>
              {"SIR HOTELS APP"}
            </Text>
            <Box flexDirection="row" justifyContent="space-between">
              <Button
                m={15}
                p={15}
                width={"40%"}
                style={{ borderRadius: 25, borderWidth: 1.5, borderColor: "#e6ffff" }}
                onPress={() => setSignInOpen(true)}
              >
                <Text color="#FFF" fontSize={15} fontWeight="bold">
                  {"Sign In"}
                </Text>
              </Button>
              <Button
                m={15}
                p={15}
                width={"40%"}
                style={{
                  borderRadius: 25, borderWidth: 1.5, borderColor: "#e6ffff"
                }}
                onPress={() => setSignUpOpen(true)}
              >
                <Text color="#FFF" fontSize={15} fontWeight="bold">
                  {"Sign Up"}
                </Text>
              </Button>
            </Box>

          </>
        }

      </ImageBackground>
    </Box>
  );
}

export default SplashScreen;
