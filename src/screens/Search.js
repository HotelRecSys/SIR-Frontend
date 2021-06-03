import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Box,
  HotelCard,
  BackButton,
  Header,
  Button,
  Input,
} from "../components";
import { ScrollView, ActivityIndicator, FlatList } from "react-native";
import { countryFilter, clearHotel } from "../store/otels";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {SearchBar} from "react-native-elements";

function Search({
  route,
  navigation,
  countryFilter,
  clearHotel,
  data,
  loading,
}) {
   const [search, setSearch] = useState("")

  return (
    <Box
      flex={1}
      as={SafeAreaView}
      p={10}
      forceInset={{ bottom: "never", vertical: "never" }}
    >
      <Header
        title={"Search"}
        icon={
          <Box mt={30} flex={1} justifyContent="flex-end" alignItems="flex-end">
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              borderRadius={50}
              width={55}
              height={55}
              p={10}
              bg="white"
            >
              <FontAwesomeIcon icon={"sliders-h"} size={20} color={"#000"} />
            </Button>
          </Box>
        }
      />
      <SearchBar
       searchIcon={<FontAwesomeIcon icon="search" size={18} color="#A9B9CD" />}
      containerStyle={{borderColor:"transparent", backgroundColor:"white", borderTopWidth:0, borderBottomWidth:0, borderRadius:30,  marginHorizontal:15, marginTop:-10 }}
          inputStyle={{ fontSize: 16, color: "#A9B9CD"}}
          inputContainerStyle={{ backgroundColor:"white",height:35}}
        placeholder="Search the hotels with names"
        onChangeText={(val) => setSearch(val)}
        value={search}
      />


    </Box>
  );
}

const mapStateToProps = ({ otels }) => ({
  data: otels.otels,
  loading: otels.loading,
});

export default connect(mapStateToProps, { countryFilter, clearHotel })(Search);
