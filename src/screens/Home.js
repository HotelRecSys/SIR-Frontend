import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, CountryCard } from "../components";

const countryList = [
  { country: "Turkey", hotelCount: 150, image:"eifell" },
  { country: "America", hotelCount: 1.400, image:"eifell"},
  { country: "Rusia", hotelCount: 2.150 , image:"eifell"},
  { country: "England", hotelCount: 50 , image:"eifell"},
  { country: "China", hotelCount: 3.120 , image:"eifell"},
  { country: "France", hotelCount: 4.520 , image:"eifell"},
  { country: "Indonesia", hotelCount: 3.120 , image:"eifell"},
  { country: "Japonia", hotelCount: 4.520 , image:"eifell"}
];

function Home() {
  return (
    <Box flex={1} as={SafeAreaView} p={10} forceInset={{ bottom: 'never', vertical: 'never'}}>
    <Box mx={15} >
    <Text fontSize={40} color="#191B32" mt={35} fontWeight="bold">{"Welcome"} </Text>
    <Text fontSize={16} color="#A9B9CD" mt={5}>{"Simge Tiraş, explore the hotels on the world with us."} </Text>
    </Box>
   
    <Box flex={1} mx={15}>
      <Text fontSize={24} color="#191B32" mt={20}  fontWeight="bold">{"Countries"}</Text>
      <ScrollView 
     >
        {
            countryList.map((item,index) => <CountryCard item={item} key={index} />)
          }
        </ScrollView>
    </Box>
    
   
    </Box>
  );
}

export default Home;
