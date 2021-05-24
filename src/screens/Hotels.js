import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, HotelCard, BackButton, Header } from "../components";
import { ScrollView, ActivityIndicator, FlatList} from "react-native";
import { countryFilter, clearHotel } from "../store/otels";
import { connect } from 'react-redux';



function Hotels({ route, navigation, countryFilter, clearHotel, data, loading }) {
  const { country, hotelCount } = route.params;
  let page = 0
  const [refreshFooter, setrefreshFooter] = useState(false)

  useEffect(() => {
    if(page === 0){
      countryFilter({'country': country, 'page': page})
    }
  }, [])

  useEffect(() => {
    return () => {
      clearHotel()
    }
  }, [])

  return (
    <Box
      flex={1}
      as={SafeAreaView}
      p={10}
      forceInset={{ bottom: "never", vertical: "never" }}
    >
    
    <Header isBackButton={true} title={country} subtitle={`Let explore the ${hotelCount} hotels at ${country}`}/>
      <Box flex={1} mx={15}>
        {/* <ScrollView> */}
          <FlatList
              data={data}
              renderItem={({item, index}) => <HotelCard item={item} hotelCount={hotelCount} key={index} navigation={navigation}/>}
              nestedScrollEnabled={true}
              ListFooterComponent={
                loading && <ActivityIndicator style={{color: '#000'}} />
              }
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                  if(!loading && data.length !== hotelCount){
                    page = page+1 
                    countryFilter({'country': country, 'page': page})
                  }
                 
              }}
          />

          {/* {data && !loading && data.map((item, index) => <HotelCard item={item} hotelCount={hotelCount} key={index} navigation={navigation} />)} */}
        {/* </ScrollView> */}
      </Box>
    </Box>
  );
}


const mapStateToProps = ({ otels }) => ({
    data: otels.otels,
    loading: otels.loading
});

export default connect(mapStateToProps, {countryFilter, clearHotel})(Hotels);
