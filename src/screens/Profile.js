import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, Box, Button, Input } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { logout, update } from "../store/auth";
import { connect } from "react-redux";
import { justifyContent } from "styled-system";
import {clearHotel} from "../store/otels"

function Profile({ logout, user, update, clearHotel}) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box style={styles.root}>
      {/* <LinearGradient 
      colors = {["#295BE0","#859dde"]}
      style ={{height:"40%"}}
      /> */}
      <Image
        source={require("../../assets/2.jpeg")}
        style={{ width: "100%", height: "50%", resizeMode: "cover" }}
      />

      <Box alignItems="center">
        {/* <Box
              
              p={10}
              style={{ borderRadius: 50, alignItems: "center" }}
            >
              <FontAwesomeIcon icon="user-circle" size={100}  />
      </Box> */}

        <Box
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Box style={{ alignItems: "center", width: "100%" }}>
            <Image
              style={{
                width: 140,
                height: 140,
                borderRadius: 70,
                marginTop: -65,
                borderWidth: 5,
                borderColor: "#fff",
              }}
              source={require(`../../assets/profile/ilgin.jpg`)}
            />
          </Box>

          <Box style={{ alignItems: "flex-end", width: "0%", marginTop: 20 }}>
            <FontAwesomeIcon
              onPress={() => setEdit(!edit)}
              icon="user-edit"
              size={50}
              color="#5A65B3"
            />
          </Box>
        </Box>
      </Box>

      <Text style={{ textAlign: "center", fontSize: 28 }}>{user?.name} </Text>

      <Box style={{ marginHorizontal: 35 }}>
        <Box
          style={{
            flexDirection: "column",
          }}
        ></Box>
        <Box
          style={styles.mytext}
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {<FontAwesomeIcon icon="envelope-open" size={24} color="#5A65B3" />}
            {"  "}
            {user?.email}
          </Text>
          <Text style={{ fontSize: 18 }}>
            {
              <FontAwesomeIcon
                icon="map-marker-alt"
                size={24}
                color="#5A65B3"
              />
            }
            {"  "}
            {user?.country}
          </Text>
        </Box>

        {edit && (
          <Box
            mt={40}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box style={{ width: "45%" }}>
              <Input
                label="Name"
                autoCapitalize="none"
                labelStyle={{
                  fontSize: 12,
                  color: "#A9B9CD",
                  alignSelf: "center",
                }}
                inputStyle={{ fontSize: 13, color: "#191B32" }}
                inputContainerStyle={{ borderColor: "#DCE5EE" }}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
                rightIcon={
                  <FontAwesomeIcon icon="eye-slash" size={20} color="#fff" />
                }
              />
            </Box>

            <Box style={{ width: "45%" }}>
              <Input
                label="Password"
                autoCapitalize="none"
                labelStyle={{
                  fontSize: 12,
                  color: "#A9B9CD",
                  alignSelf: "center",
                }}
                inputStyle={{ fontSize: 13, color: "#191B32" }}
                inputContainerStyle={{ borderColor: "#DCE5EE" }}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                rightIcon={
                  showPassword ? (
                    <Button onPress={() => setShowPassword(false)}>
                      <FontAwesomeIcon
                        icon="eye-slash"
                        size={20}
                        color="#A9B9CD"
                      />
                    </Button>
                  ) : (
                    <Button onPress={() => setShowPassword(true)}>
                      <FontAwesomeIcon icon="eye" size={20} color="#A9B9CD" />
                    </Button>
                  )
                }
                secureTextEntry={!showPassword}
              />
            </Box>
          </Box>
        )}

        <Box
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: edit ? 20 : 148,
          }}
        >
          <Button
            py={12}
            px={35}
            onPress={() => {clearHotel(), logout()}}
            style={{
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#191B32",
            }}
          >
            <Text style={{ color: "#fff" }}>{"Logout"}</Text>
          </Button>

          <Button
            py={12}
            px={35}
            onPress={() => {
              update({ name: name, password: password, user_id: user.id });
              setEdit(false);
            }}
            style={{
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#191B32",
              width: 118,
            }}
          >
            <Text style={{ color: "#fff" }}>{"Save"}</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mycard: {
    margin: 3,
    marginTop: 20,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  mytext: {
    alignSelf: "center",
    fontSize: 18,
    marginTop: 3,
  },
});

const mapStateToProps = ({ authentication }) => ({
  isLoggedIn: true,
  user: authentication.user,
});

export default connect(mapStateToProps, { logout, update, clearHotel })(Profile);
