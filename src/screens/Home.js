import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, CountryCard, Header } from "../components";

const countryList = [
  { country: "Turkey", hotelCount: 150, image: "eifell" },
  { country: "America", hotelCount: 1.4, image: "eifell" },
  { country: "Rusia", hotelCount: 2.15, image: "eifell" },
  { country: "England", hotelCount: 50, image: "eifell" },
  { country: "China", hotelCount: 3.12, image: "eifell" },
  { country: "France", hotelCount: 4.52, image: "eifell" },
  { country: "Indonesia", hotelCount: 3.12, image: "eifell" },
  { country: "Japonia", hotelCount: 4.52, image: "eifell" },
];

function Home({navigation}) {
  return (
    <Box
      flex={1}
      as={SafeAreaView}
      pt={10}
      pb={5}
      px={10}
      forceInset={{ bottom: "never", vertical: "never" }}
    >
      <Header title={"Welcome"} subtitle={"Simge Tiraş, explore the hotels on the world with us."}/>

      <Box flex={1} mx={15}>
        <Text fontSize={24} color="#191B32" mt={20} fontWeight="bold">
          {"Countries"}
        </Text>
        <ScrollView>
          {countryList.map((item, index) => (
              <CountryCard item={item} key={index} navigation={navigation} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
}

export default Home;
