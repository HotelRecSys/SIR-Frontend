import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, HotelCard, BackButton, Header } from "../components";
import { ScrollView, ActivityIndicator, FlatList} from "react-native";
import { countryFilter, clearHotel } from "../store/otels";
import { connect } from 'react-redux';



function Top({ route, navigation, countryFilter, clearHotel, data, loading }) {
 

  return (
    <Box
      flex={1}
      as={SafeAreaView}
      p={10}
      forceInset={{ bottom: "never", vertical: "never" }}
    >
    
   
    </Box>
  );
}


const mapStateToProps = ({ otels }) => ({
    data: otels.otels,
    loading: otels.loading
});

export default connect(mapStateToProps, {countryFilter, clearHotel})(Top);
