import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "../../components";

import { Image, Platform } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ImageBackground } from "react-native";

function HotelCard({ item, navigation, hotelCount }) {
  const images = item.img.split('\n')

  return (
    <Box
      bg="white"
      mt={15}
      p={10}
      style={{
        borderRadius: 20,
        borderColor: "#fff",
        borderWidth: 0.5,
        shadowColor: "#fffe",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        shadowOpacity: 0.07,
        shadowRadius: 30,
        elevation: 0.5,
      }}
    >
      <Button
        justifyContent="flex-start"
        onPress={() =>
          navigation.navigate("HotelInfo", {
            name: item.name,
            city: item.city,
            country: item.country,
            score: item.score,
            address: item.address,
            properties: item.properties,
            images: item.img
           })
         }
      >
        <Box flexDirection="column" flex={1}>
          {item && (
            <>
              <Image
                source={{ uri: images[0]}}
                style={{ height: 200, borderRadius: 10, left: 0, right: 0 }}
                resizeMode="cover"
              />
              <Box
              bg={"#191B32"}
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  top: 0,
                  right: 0,
                  paddingLeft: 20,
                  paddingBottom: 15,
                  paddingTop: 10,
                  paddingRight: 10,
                  borderLeftWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: "#fff",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: Platform.OS === "android"? 20 : 10,
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 0,
                  shadowColor: "#fffe",
                  shadowOffset: {
                    width: 0,
                    height: 15,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 30,
                  elevation: 15,
                }}
              >
                <Text
                  fontSize={20}
                  color="#fff"
                  fontWeight="bold"
                >
                  {item.score}
                </Text>
              </Box>
            </>
          )}
          <Box flexDirection="row" ml={15} mt={20} alignItems={"center"}>
            <Box flexDirection="column" justifyContent={"center"} flex={1}>
              <Text fontSize={18} color="#191B32" fontWeight="bold">
                {item.name}
              </Text>
              <Box flexDirection="row" mt={3} mb={10}>
                <FontAwesomeIcon
                  style={{ marginRight: 5 }}
                  icon={"map-marker-alt"}
                  size={15}
                  color={"#dfe5ec"}
                />
                <Text fontSize={14} color="#A9B9CD" flex={1}>
                  {item.city + ", " + item.country}
                </Text>
              </Box>
            </Box>
            <FontAwesomeIcon
              style={{ marginRight: 10 }}
              icon={"chevron-right"}
              size={15}
              color={"#dfe5ec"}
            />
          </Box>
        </Box>
      </Button>
    </Box>
  );
}

export default HotelCard;
