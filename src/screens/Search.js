import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  HotelCard,
  Header,
  Button,
} from "../components";
import { ActivityIndicator, FlatList } from "react-native";
import { search, clearHotel } from "../store/otels";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SearchBar } from "react-native-elements";
import { Filter } from "./index";

function Search({ route, navigation, clearHotel, search, data, filter, loading }) {
  const [searchWord, setSearchWord] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    clearHotel();
    setSearchWord("");
  }, []);

  return (
    <>
      {filterOpen && <Filter isOpen={filterOpen} setOpen={setFilterOpen} />  }

      {
        <Box
          flex={1}
          as={SafeAreaView}
          p={10}
          forceInset={{ bottom: "never", vertical: "never" }}
        >
          <Header
            title={"Search"}
            icon={
              <Box
                mt={30}
                flex={1}
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button
                  onPress={() => setFilterOpen(true)}
                  borderRadius={50}
                  width={55}
                  height={55}
                  p={10}
                  bg="white"
                >
                  <FontAwesomeIcon
                    icon={"sliders-h"}
                    size={20}
                    color={"#000"}
                  />
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
              onPress={() => {search({ otelName: searchWord })}}
            >
              <FontAwesomeIcon icon="search" size={18} color="white" />
            </Button>
          </Box>
          <Box flex={1} mx={15}>
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
          </Box>
        </Box>
      }
    </>
  );
}

const mapStateToProps = ({ otels }) => ({
  data: otels.searchedHotels,
  loading: otels.loading,
});

export default connect(mapStateToProps, { search, clearHotel })(Search);
