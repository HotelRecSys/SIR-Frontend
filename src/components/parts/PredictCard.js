import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "../../components";

import { Image, Platform } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ImageBackground } from "react-native";
import { height } from "styled-system";

function PredictCard({ item }) {
  return (
    <Box
      mt={15}
      p={10}
    >
      <Button
        pb={0}
        justifyContent="flex-start"
        // onPress={() =>
        //   navigation.navigate("Hotels", {
        //     country: item.country,
        //     hotelCount: item.hotelCount,
        //   })
        // }
      >
        <Box flexDirection="column" >
          {item && item.img && (
              <Image
                source={{ uri: item.img }}
                style={{ height: 120, width:120,  borderRadius: 20, left: 0, right: 0 }}
                resizeMode="cover"
              />
          )}
          <Box flexDirection="row"  mt={5} alignItems={"center"} style={{width:120}}>
            <Box flexDirection="column" justifyContent={"center"} >
              <Text fontSize={18} color="#191B32" fontWeight="bold" numberOfLines={2}>
                {item.name}
              </Text>
              <Box flexDirection="row" mt={3}  pb={15}>
                <FontAwesomeIcon
                  style={{ marginRight: 5 }}
                  icon={"map-marker-alt"}
                  size={15}
                  color={"#295BE0"}
                />
                <Text fontSize={14} color="#295BE0">
                  {item.country}
                </Text>
              </Box>
            </Box>
            
          </Box>
        </Box>
      </Button>
    </Box>
  );
}

export default PredictCard;
