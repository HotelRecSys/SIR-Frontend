import React, { useState, useEffect } from "react";
import { Text, Box, Input, Button, BottomSheetArea } from "../components";
import {
  Dimensions,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundColor, flexGrow } from "styled-system";
import { Rating } from "react-native-ratings";

const { height } = Dimensions.get("window");

const sheetRef = React.createRef();

function Filter({ isOpen, setOpen }) {
  useEffect(() => {
    sheetRef.current.snapTo(0);
    setSelected([])
  }, [isOpen]);

  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Athens", value: "Athens" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Bangkok", value: "Bangkok" },
    { label: "Barcelona", value: "Barcelona" },
    { label: "Batumi", value: "Batumi" },
    { label: "Berlin", value: "Berlin" },
    { label: "Bogotá", value: "Bogotá" },
    { label: "Budapest", value: "Budapest" },
    { label: "Buenos Aires", value: "Buenos Aires" },
    { label: "Cairo", value: "Cairo" },
    { label: "Chiang Mai", value: "Chiang Mai" },
    { label: "Da Lat", value: "Da Lat" },
    { label: "Danang", value: "Danang" },
    { label: "Florence", value: "Florence" },
    { label: "Gold Coast", value: "Gold Coast" },
    { label: "Hanoi", value: "Hanoi" },
    { label: "Ho Chi Minh City", value: "Ho Chi Minh City" },
    { label: "Jakarta", value: "Jakarta" },
    { label: "Jeddah", value: "Jeddah" },
    { label: "Kiev", value: "Kiev" },
    { label: "Krakow", value: "Krakow" },
    { label: "Kuala Lumpur", value: "Kuala Lumpur" },
    { label: "Kyoto", value: "Kyoto" },
    { label: "Lima", value: "Lima" },
    { label: "Lisbon", value: "Lisbon" },
    { label: "London", value: "London" },
    { label: "Madrid", value: "Madrid" },
    { label: "Manila", value: "Manila" },
    { label: "Milan", value: "Milan" },
    { label: "Moscow", value: "Moscow" },
    { label: "Munich", value: "Munich" },
    { label: "Nha Trang", value: "Nha Trang" },
    { label: "Odessa", value: "Odessa" },
    { label: "Osaka", value: "Osaka" },
    { label: "Paris", value: "Paris" },
    { label: "Prague", value: "Prague" },
    { label: "Rio de Janeiro", value: "Rio de Janeiro" },
    { label: "Riyadh", value: "Riyadh" },
    { label: "Rome", value: "Rome" },
    { label: "Saint Petersburg", value: "Saint Petersburg" },
    { label: "Seoul", value: "Seoul" },
    { label: "Shanghai", value: "Shanghai" },
    { label: "Siem Reap", value: "Siem Reap" },
    { label: "Singapore", value: "Singapore" },
    { label: "Sydney", value: "Sydney" },
    { label: "São Paulo", value: "São Paulo" },
    { label: "Taipei Area", value: "Taipei Area" },
    { label: "Tbilisi", value: "Tbilisi" },
    { label: "Tokyo", value: "Tokyo" },
    { label: "Vienna", value: "Vienna" },
  ]);

  const properties =
    "Cot|Hairdryer|Swimming Pool (Indoor)|Jacuzzi (Hotel)|Flatscreen TV|WiFi (Rooms)|Free WiFi (Public Areas)|Lift|Central Heating|Terrace (Hotel)|Television|Desk|Free WiFi (Combined)|Free WiFi (Rooms)|Non-Smoking Rooms|Safe (Hotel)|Hotel|Hotel Bar|Satellite TV|Balcony|WiFi (Public Areas)";
  const propertys = properties.split("|");

  const Content = () => {
    {
      console.log({ selected });
    }
    return (
      <Box
        style={{
          flex: 1,
          backgroundColor: "white",
          height: height,
          paddingHorizontal: 25,
        }}
      >
        <Box
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <Text fontSize={24} color="#191B32" fontWeight="bold">
            Filter
          </Text>

          <Button onPress={() => setOpen(false)}>
            <Text color="#191B32" fontSize={15} fontWeight={500}>
              {"Save"}
            </Text>
          </Button>
        </Box>

        <Box flexDirection="column">
          <Text color="#A9B9CD" fontSize={15} fontWeight={500}>
            SORTED BY
          </Text>

          <Box style={{ marginTop: 10, zIndex: 10 }}>
            <DropDownPicker
              open={dropDownOpen}
              value={value}
              items={items}
              setOpen={setDropDownOpen}
              setValue={setValue}
              setItems={items}
              //searchable={true}
              listMode={"SCROLLVIEW"}
              placeholder={"Select a city"}
              closeAfterSelecting={true}
              style={{
                marginTop: 10,
                maxHeight: 300,
                backgroundColor: "#fafafa",
              }}
              labelStyle={{
                fontWeight: "600",
              }}
            />
          </Box>

          <Text color="#A9B9CD" mt={25} fontSize={15} fontWeight={500}>
            RATING
          </Text>
          <Box
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
            }}
          >
            <Rating
              startingValue={rating}
              type="custom"
              style={{ paddingVertical: 10 }}
              ratingColor="#191B32"
              tintColor="white"
              ratingTextColor="#191B32"
              ratingBackgroundColor="#A9B9CD"
              jumpValue={0.1}
              onStartRating={setRating}
            />
            <Text
              style={{ fontSize: 24, color: "#191B32", alignSelf: "center" }}
            >
              {" "}
              {rating}{" "}
            </Text>
          </Box>
          <Text color="#A9B9CD" mt={25} fontSize={15} fontWeight={500}>
            PROPERTIES
          </Text>

          <Box mt={10}>
            <FlatList
              columnWrapperStyle={{ flexWrap: "wrap", flex: 1 }}
              data={propertys}
              numColumns={3}
              keyExtractor={item => item}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    marginTop: 3,
                    marginHorizontal: 3,
                    padding: 3,
                    borderWidth: 0.5,
                    borderRadius: 4,
                    height: 25,
                    backgroundColor: "#edf2f7",
                  }}
                  onPress={() => setSelected([...selected, item])}
                >
                  <Text style={{ color: "#191B32" }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <BottomSheetArea
      sheetRef={sheetRef}
      snapPoints={["90%", "35%", "0"]}
      onCloseEnd={() => {
        setOpen(false);
      }}
      headerStyle={{
        paddingBottom: 0
      }}
      renderContent={() => <Content />}
    />
  );
}

export default Filter;
