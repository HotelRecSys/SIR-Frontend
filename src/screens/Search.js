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
import { search, clearHotel } from "../store/otels";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SearchBar } from "react-native-elements";

function Search({ route, navigation, clearHotel, search, data, loading }) {
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    clearHotel();
  }, []);

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
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 15,
        }}
      >
        <SearchBar
          searchIcon={null}
          containerStyle={{
            flex: 1,
            borderColor: "transparent",
            backgroundColor: "white",
            height: 45,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderTopLeftRadius: 150,
            borderBottomLeftRadius: 150,
            marginRight: 7,
          }}
          inputStyle={{ fontSize: 16, color: "#A9B9CD" }}
          inputContainerStyle={{ backgroundColor: "white", height: 30 }}
          placeholder="Type hotel name"
          onChangeText={(val) => setSearchWord(val)}
          value={searchWord}

          // onSubmitEditing
        />
        <Button
          style={{
            borderTopRightRadius: 150,
            borderBottomRightRadius: 150,
            justifyContent: "center",
            width: 70,
            height: 45,
            backgroundColor: "#191B32",
          }}
          onPress={() => search({ 'otelName': searchWord })}
        >
          <FontAwesomeIcon icon="search" size={18} color="white" />
        </Button>

        
      </Box>

      <Box flex={1} mx={15}>
          {/* <ScrollView> */}
          {console.log(data)}
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <HotelCard
                item={item}
                hotelCount={10}
                key={index}
                navigation={navigation}
              />
            )}
            ListFooterComponent={
              loading && <ActivityIndicator style={{ color: "#000" }} />
            }
            nestedScrollEnabled={true}
          />

          {/* {data && !loading && data.map((item, index) => <HotelCard item={item} hotelCount={hotelCount} key={index} navigation={navigation} />)} */}
          {/* </ScrollView> */}
        </Box>
    </Box>
  );
}

const mapStateToProps = ({ otels }) => ({
  data: otels.searchedHotels,
  loading: otels.loading,
});

export default connect(mapStateToProps, { search, clearHotel })(Search);
