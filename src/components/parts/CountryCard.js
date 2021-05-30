import React, { useState, useEffect,useNavigation } from "react";
import { Box, Text,Button } from "../../components";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function CountryCard({item, navigation}) {
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
         navigation.navigate("Hotels", {
            country: item.name,
            hotelCount: item.otelCount,
          })
        }
      >
        <Box flexDirection="row">
          {item && (
            <Image
              source={{ uri: item.photo}}
              style={{ width: 65, height: 65, borderRadius: 10}}
            />
          )}
          <Box flexDirection="column" ml={15} justifyContent={"center"} flex={1}>
            <Text fontSize={18} color="#191B32" fontWeight="bold">
              {item.name + " Hotels"}
            </Text>
            <Text fontSize={16} color="#A9B9CD" mt={3}>
              {item.otelCount + " hotels"}
            </Text>
          </Box>
        </Box>
      </Button>
    </Box>
  );
}

export default CountryCard;
