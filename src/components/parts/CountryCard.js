import React, { useState, useEffect } from "react";
import { Box, Text } from "../../components";

import { Image } from "react-native";

const images = {
  eifell: {
    uri: require("../../../assets/countries/eifell.png"),
  },
};

function CountryCard({ item }) {

  return (
    <Box
      bg="white"
      flexDirection="row"
      mt={10}
      p={10}
      style={{
        borderRadius: 20,
        borderColor:"#fff",
        borderWidth:0.5,
        shadowColor: "#fffe",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        shadowOpacity: 0.07,
        shadowRadius: 30,
        elevation:0.5,
     
      }}
    >
      {item && item.image && (
        <Image
          source={images[item.image].uri}
          style={{ width: 65, height: 65, borderRadius: 10 }}
        />
      )}
      <Box flexDirection="column" ml={15} justifyContent={"center"} >
        <Text fontSize={18} color="#191B32" fontWeight="bold">
          {item.country + " Hotels"}
        </Text>
        <Text fontSize={16} color="#A9B9CD" mt={3}>
          {item.hotelCount + " hotels"}
        </Text>
      </Box>
    </Box>
  );
}

export default CountryCard;
