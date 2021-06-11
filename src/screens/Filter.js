import React, { useState, useEffect } from "react";
import { Text, Box, Button, BottomSheetArea } from "../components";
import { Dimensions, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { filter } from "../store/otels";
import { connect } from "react-redux";
import { Rating } from "react-native-ratings";
import DropDownPicker from "react-native-dropdown-picker";


const { height } = Dimensions.get("window");

const sheetRef = React.createRef();

function Filter({ isOpen, setOpen, filter }) {
  useEffect(() => {
    sheetRef.current.snapTo(0);
    setProperties([]);
  }, [isOpen]);


  const [score, setScore] = useState(0);
  const [properties, setProperties] = useState([]);
  const [city, setCity] = useState(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Athens", value: "Athens" },
    { label: "Bangkok", value: "Bangkok" },
    { label: "Bansko", value: "Bansko" },
    { label: "Barcelona", value: "Barcelona" },
    { label: "Batumi", value: "Batumi" },
    { label: "Beijing", value: "Beijing" },
    { label: "Belgrade", value: "Belgrade" },
    { label: "Berlin", value: "Berlin" },
    { label: "Brussels", value: "Brussels" },
    { label: "Bucharest", value: "Bucharest" },
    { label: "Budapest", value: "Budapest" },
    { label: "Buenos Aires", value: "Buenos Aires" },
    { label: "Cairo", value: "Cairo" },
    { label: "Cape Town", value: "Cape Town" },
    { label: "Copenhagen", value: "Copenhagen" },
    { label: "Dublin", value: "Dublin" },
    { label: "Florence", value: "Florence" },
    { label: "Frankfurt", value: "Frankfurt" },
    { label: "Jakarta", value: "Jakarta" },
    { label: "Jeddah", value: "Jeddah" },
    { label: "Kiev", value: "Kiev" },
    { label: "Krakow", value: "Krakow" },
    { label: "Kuala Lumpur", value: "Kuala Lumpur" },
    { label: "Lisbon", value: "Lisbon" },
    { label: "London", value: "London" },
    { label: "Madrid", value: "Madrid" },
    { label: "Marrakesh", value: "Marrakesh" },
    { label: "Miami Beach", value: "Miami Beach" },
    { label: "Milan", value: "Milan" },
    { label: "Montreal", value: "Montreal" },
    { label: "Moscow", value: "Moscow" },
    { label: "Munich", value: "Munich" },
    { label: "New Delhi", value: "New Delhi" },
    { label: "New York", value: "New York" },
    { label: "Osaka", value: "Osaka" },
    { label: "Paris", value: "Paris" },
    { label: "Prague", value: "Prague" },
    { label: "Rio de Janeiro", value: "Rio de Janeiro" },
    { label: "Riyadh", value: "Riyadh" },
    { label: "Rome", value: "Rome" },
    { label: "Saint Petersburg", value: "Saint Petersburg" },
    { label: "Seoul", value: "Seoul" },
    { label: "Shanghai", value: "Shanghai" },
    { label: "Singapore", value: "Singapore" },
    { label: "Sofia", value: "Sofia" },
    { label: "Stockholm", value: "Stockholm" },
    { label: "Sydney", value: "Sydney" },
    { label: "São Paulo", value: "São Paulo" },
    { label: "Taipei Area", value: "Taipei Area" },
    { label: "Tbilisi", value: "Tbilisi" },
    { label: "Tokyo", value: "Tokyo" },
    { label: "Venice", value: "Venice" },
    { label: "Vienna", value: "Vienna" },
    { label: "Zurich", value: "Zurich" },


  ]);

  const propertys = [
  'Shower',
  'WiFi (Public Areas)',
  'Television',
  'Car Park', 
  'Non-Smoking Rooms', 
  'Hairdryer', 
  'Good Rating',
  'Desk', 
  'Business Hotel',
  'Telephone', 
  'Air Conditioning',
  'Central Heating',
  'Reception (24/7)',
  'Laundry Service',
  'Cot',
  'Luxury Hotel', 
  'Restaurant',
  'Family Friendly',
  'Hotel Bar', 
  'Terrace (Hotel)',
  'Safe (Hotel)', 
  'Lift', 
  'Room Service', 
  'Bathtub',
  'Electric Kettle',
  'Pet Friendly',
  'Fridge']

  const filtered = (item) => {
    const element = [...properties];
    const index = element.indexOf(item);
    if (index === -1) element.push(item);
    else element.splice(index, 1);

    setProperties(element);
  };
  
  const Content = () => {
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

          <Button
            onPress={() => {
              setOpen(false);
              console.log(city, score,properties)
              filter({ 'city': city, 'score': score, 'properties': properties });
            }}
          >
            <Text color="#191B32" fontSize={15} fontWeight={500}>
              {"Save"}
            </Text>
          </Button>
        </Box>

        <Box flexDirection="column">
          <Text color="#A9B9CD" fontSize={15} fontWeight={500}>
            SORTED BY
          </Text>

          <DropDownPicker
            open={dropDownOpen}
            value={city}
            items={items}
            setOpen={setDropDownOpen}
            setValue={setCity}
            setItems={items}
            //searchable={true}
            listMode={"SCROLLVIEW"}
            placeholder={"Select a city"}
            closeAfterSelecting={true}
            style={{
              marginTop: 10,
              maxHeight: 300,
              backgroundColor: "#fafafa",
              borderColor: "#A9B9CD",
            }}
            labelStyle={{
              fontWeight: "600",
            }}
            dropDownContainerStyle={{ borderColor: "#A9B9CD" }}
            onChangeValue={setCity}
          />

          <Text color="#A9B9CD" mt={25} fontSize={15} fontWeight={500}>
            RATING
          </Text>
          <Box
            style={{
              flexDirection: "row",
              justifyContent: "start",
              marginTop: 5,
            }}
          >
            <Rating
              startingValue={score}
              type="custom"
              style={{ paddingVertical: 10 }}
              ratingCount={10}
              ratingColor="#191B32"
              tintColor="white"
              ratingTextColor="#191B32"
              ratingBackgroundColor="#A9B9CD"
              fractions={1}
              imageSize={30}
              onFinishRating={setScore}
            />
            <Text
              style={{ fontSize: 22, color: "#191B32", alignSelf: "center" }}
            >
              {" "}
              {score}{" "}
            </Text>
          </Box>
          <Text color="#A9B9CD" mt={20} fontSize={15} fontWeight={500}>
            PROPERTIES
          </Text>

          <ScrollView  >
          <Box mt={10} height={800}>
   

            <FlatList
              columnWrapperStyle={{ flexWrap: "wrap", flex: 1 }}
              data={propertys}
              numColumns={3}
             
              keyExtractor={(item) => item}
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
                    backgroundColor: properties.includes(item)
                      ? "#191B32"
                      : "#edf2f7",
                  }}
                  onPress={() =>
                    filtered(item)
                  }
                >
                  <Text
                    style={{
                      color: properties.includes(item) ? "#edf2f7" : "#191B32",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
            </Box>
            </ScrollView>
            
          
        </Box>
      </Box>
    );
  };
  return (
    <BottomSheetArea
      sheetRef={sheetRef}
      snapPoints={["80%", "35%", "0"]}
      onCloseEnd={() => {
        setOpen(false);
      }}
      renderContent={() => <Content />}
    />
  );
}

const mapStateToProps = ({ otels }) => ({});

export default connect(mapStateToProps, { filter })(Filter);
