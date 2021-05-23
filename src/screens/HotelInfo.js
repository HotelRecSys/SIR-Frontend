import React from "react";
import {Image} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, BackButton, Header } from "../components";
import { ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Star from 'react-native-star-view';
import { Dimensions, FlatList } from "react-native";

function HotelInfo({ route, navigation }) {
  const { country, hotelCount } = route.params;
  const data = [
    {
      id: 1550823,
      name: "Le Grand Hotel Cannes",
      score: 7.9,
      city: "Cannes",
      country: "France",
      url: "https://www.booking.com/hotel/fr/grand-cannes.html",
      address:
        "45 boulevard de la Croisette, Cannes City-Centre, 06400 Cannes, France",
      img: "https://cf.bstatic.com/images/hotel/max1024x768/210/210081185.jpg",
      properties: "Electric Kettle|Conference Rooms|Diving|Desk|Business Centre|Excellent Rating|Hairdryer|Beach|Childcare|WiFi (Public Areas)|Beauty Salon|From 3 Stars|Good Rating|Family Friendly|Bed & Breakfast|Sitting Area (Rooms)|Radio|From 4 Stars|Gay-friendly|From 2 Stars|Ironing Board|Free WiFi (Combined)|Romantic|Bike Rental|Free WiFi (Rooms)|Non-Smoking Rooms|Concierge|Safe (Rooms)|Fan|Jacuzzi (Hotel)|Honeymoon|Boutique Hotel|Singles|Computer with Internet|Fridge|WiFi (Rooms)|Free WiFi (Public Areas)|Washing Machine|Central Heating|Safe (Hotel)|Telephone|Reception (24/7)|Wheelchair Accessible|Cable TV|Massage|Hotel Bar|Adults Only|Bathtub|Satisfactory Rating|Room Service|Hiking Trail|Terrace (Hotel)|Towels|Very Good Rating|Television|Business Hotel|Direct beach access|Shower|Express Check-In / Check-Out|Car Park|Satellite TV|Golf Course|Sailing|Surfing|Openable Windows"
    },
  ];
  const property = data[0].properties.split('|')
  const screenHeight = Dimensions.get('window').height
  return (

      <Box
        flex={1}
        as={SafeAreaView}
      >

        <Box flex={1} >
        
          <Image
          
            source={{ uri: data[0].img}}
            style= {{width:'100%', height:'70%'}}
          />
    
          <Text style={{fontSize: 23, margin: 10, fontWeight: '500'}}>
            {data[0].name}
          </Text>

          <Box flexDirection="row" style={{justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15, margin: 10, fontWeight: '100'}}>
            <FontAwesomeIcon icon="map-marker-alt" size={20} color="#A9B9CD"/>  
              {data[0].city}, {data[0].country} 
            </Text>
            <Star score={data[0].score/2} style={{ width: 100, height: 20, marginRight:20}} />
          </Box>

          <Box flex={1}>
            <ScrollView>
            <FlatList
              data={property}
              renderItem={({item}) => <Text>{item}</Text>}
              nestedScrollEnabled={true}
            
            />
              {/* {property.map((item, index) => <Box  key={index}><Text>{item}</Text></Box>)} */}
            </ScrollView>

          </Box>
        </Box>
      </Box>
  );
}

export default HotelInfo;
