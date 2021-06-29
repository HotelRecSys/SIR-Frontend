import React, { useState, useEffect } from "react";
import { Text, Box, Input, Button, BottomSheetArea } from "../../components";
import {
  Dimensions,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import countryList from "../../user-countries.json";
import { register } from "../../store/auth";
import { connect } from "react-redux";

const { height } = Dimensions.get("window");

const sheetRef = React.createRef();
const inputPassRef = React.createRef(null);
const emailRef = React.createRef(null);

function SignUp({ isOpen, setOpen, setSignInOpen, register, navigation, message }) {
  useEffect(() => {
    sheetRef.current.snapTo(0);
  }, [isOpen]);

  const Content = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [country, setCountry] = useState({ name: "", flag: "", code: "" });

    const [emailError, setEmailError] = useState({
      renderErrorMessage: false,
      errorMessage: "",
    });
    const [passwordError, setPasswordError] = useState({
      renderErrorMessage: false,
      errorMessage: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Box flex={1} bg="white" height={height} px={25}>
        <Box mb={35}>
          <Text mb={10} fontSize={20} color="#191B32" fontWeight="bold">
            Create an account
          </Text>
          <Text fontSize={15} color="#AFA5AD" fontWeight={500}>
            Start to explore hotels with us
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Input
            p={10}
            ml={10}
            flex={1}
            label="Name Surname"
            placeholder="Ex:Rümü Arslan"
            labelStyle={{ fontSize: 13, color: "#A9B9CD" }}
            inputStyle={{ fontSize: 15, color: "#191B32" }}
            inputContainerStyle={{ borderColor: "#DCE5EE" }}
            leftIcon={<FontAwesomeIcon icon="user" size={20} color="#A9B9CD" />}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Input
            p={10}
            ml={10}
            flex={1}
            label="Email"
            autoCapitalize="none"
            placeholder="Ex:sir@gmail.com"
            labelStyle={{ fontSize: 13, color: "#A9B9CD" }}
            inputStyle={{ fontSize: 15, color: "#191B32" }}
            inputContainerStyle={{ borderColor: "#DCE5EE" }}
            errorStyle={{ color: "red" }}
            renderErrorMessage={emailError.renderErrorMessage}
            errorMessage={emailError.errorMessage}
            leftIcon={<FontAwesomeIcon icon="at" size={20} color="#A9B9CD" />}
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Box>

        <Text
          style={{
            marginTop: 20,
            padding: 10,
            fontSize: 13,
            fontWeight: "bold",
            color: "#A9B9CD",
          }}
        >
          Country
        </Text>

        <Box>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Box style={styles.centeredView}>
              <Box style={styles.modalView}>
                <FlatList
                  data={countryList}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setCountry({
                          ...country,
                          name: item.name,
                          flag: item.emoji,
                          code: item.code,
                        }),
                          setModalVisible(!modalVisible);
                      }}
                    >
                      <Box>
                        <Text style={styles.modalText}>
                          {item.emoji} {item.name}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  )}
                />
              </Box>
            </Box>
          </Modal>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#DCE5EE",
              borderBottomWidth: 1,
              justifyContent: "flex-start",
              paddingBottom: 15,
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            {
              <FontAwesomeIcon
                icon="globe-americas"
                size={20}
                color="#A9B9CD"
              />
            }
            {country.name == "" ? (
              <Text color="#191B32" pl={20} fontSize={13}>
                {"Ex: Germany"}
              </Text>
            ) : (
              <Text color="#191B32" pl={20} fontSize={16} fontWeight={500}>
                {country.name} {country.flag}
              </Text>
            )}
          </Button>
        </Box>

        <Button
          mt={20}
          bg="#191B32"
          py={15}
          style={{ borderColor: "#191B32", borderRadius: 10 }}
          onPress={() => {
            register({
              name: name,
              password: password,
              country: country.name,
              email: email,
              image: "profile.jpeg",
            });

            if (message) {
              setOpen(false);
              setSignInOpen(true);
            }
          }}
        >
          <Text color="#FFF" fontSize={15} fontWeight={500}>
            {"Sign Up"}
          </Text>
        </Button>
        <Box mt={35} flexDirection="row">
          <Button bg="#FFF" p={12} mr={20}>
            <Text color="#A9B9CD" fontSize={15} fontWeight={500}>
              {"Already have an account ?"}
            </Text>
          </Button>

          <Button
            bg="#FFF"
            py={12}
            px={35}
            style={{ borderColor: "#191B32", borderWidth: 1, borderRadius: 10 }}
            onPress={() => {
              setOpen(false);
              setSignInOpen(true);
            }}
          >
            <Text color="#191B32" fontSize={15} fontWeight={500}>
              {"Sign In"}
            </Text>
          </Button>
        </Box>
      </Box>
    );
  };
  return (
    <BottomSheetArea
      sheetRef={sheetRef}
      snapPoints={["70%", "35%", "0"]}
      onCloseEnd={() => {
        setOpen(false);
        setSignInOpen(false);
      }}
      // header={BottomSheetFilterHeader}
      // headerStyle={{
      //   backgroundColor: colors.primary,
      //   paddingBottom: 0
      // }}
      renderContent={() => <Content />}
    />
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "75%",
    height: "75%",
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "300",
    letterSpacing: 0.25,
    fontSize: 18,
  },
});

const mapStateToProps = ({ authentication }) => ({
  isLoggedIn: true,
  message: authentication.message,
});

export default connect(mapStateToProps, { register })(SignUp);
