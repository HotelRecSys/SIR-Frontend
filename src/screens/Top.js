import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, HotelCard, BackButton, Header } from "../components";
import { ScrollView, ActivityIndicator, FlatList} from "react-native";
import { countryFilter, clearHotel } from "../store/otels";
import { connect } from 'react-redux';



function Top({ route, navigation, countryFilter, data, loading, clearHotel }) {
  let page = 0
  const [refreshFooter, setrefreshFooter] = useState(false)

  useEffect(() => {
    if(page === 0){
      countryFilter({'country': 'Faroe Islands Hotels', 'page': page})
    }
  }, []);

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
       <Header
          title={"Top 10 Hotel"}
          subtitle={`Explore the hotels that peoples liked.`}
        />
   <Box flex={1} mx={15}>
        {/* <ScrollView> */}
          <FlatList
              data={data}
              renderItem={({item, index}) => <HotelCard item={item} hotelCount={10} key={index} navigation={navigation}/>}
              nestedScrollEnabled={true}
              ListFooterComponent={
                loading && <ActivityIndicator style={{color: '#000'}} />
              }
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                  if(!loading && data.length !== hotelCount){
                    page = page+1 
                    countryFilter({'country': 'Faroe Islands Hotels', 'page': page})
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

export default connect(mapStateToProps, {countryFilter, clearHotel})(Top);
