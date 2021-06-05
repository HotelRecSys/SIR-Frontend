import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, HotelCard, BackButton, Header } from "../components";
import { ScrollView, ActivityIndicator, FlatList} from "react-native";
import { getTopHotels } from "../store/otels";
import { connect } from 'react-redux';



function Top({ route, navigation, data, loading, getTopHotels }) {
  let page = 0
  const [refreshFooter, setrefreshFooter] = useState(false)

  useEffect(() => {
    getTopHotels()
  }, []);

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
              ListFooterComponent={
                loading && <ActivityIndicator style={{color: '#000'}} />
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
    data: otels.topHotels,
    loading: otels.loading
});

export default connect(mapStateToProps, {getTopHotels})(Top);
