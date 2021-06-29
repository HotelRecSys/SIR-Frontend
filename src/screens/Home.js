import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Box, CountryCard, Header, PredictCard } from "../components";
import { connect } from "react-redux";
import countryList from "../countries.json";
import { clickout, clearHotel } from "../store/otels";

function Home({ navigation, user, data, clickout }) {
  const [predictData, setPredictData] = useState([]);

  useEffect(() => {
    clickout({ user_id: user.id, item_id: 0 });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setPredictData(data);
    }
  }, [data]);

  return (
    <Box
      flex={1}
      as={SafeAreaView}
      pt={10}
      px={10}
      forceInset={{ bottom: "never", vertical: "never" }}
    >
      <ScrollView>
        <Header
          title={"Welcome"}
          subtitle={`${user?.name}, explore the hotels on the world with us.`}
        />

        {predictData.length > 0 && (
          <Box mx={15}>
            <Text fontSize={24} color="#191B32" mt={15} fontWeight="bold">
              {"For you"}
            </Text>
            <ScrollView horizontal>
              {predictData.map((item, index) => (
                <PredictCard item={item} key={index} navigation={navigation} />
              ))}
            </ScrollView>
          </Box>
        )}

        <Box flex={1} mx={15}>
          <Text fontSize={24} color="#191B32" mt={10} fontWeight="bold">
            {"Countries"}
          </Text>

          {countryList.map((item, index) => (
            <CountryCard item={item} key={index} navigation={navigation} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

const mapStateToProps = ({ authentication, otels }) => ({
  user: authentication.user,
  data: otels.predictedHotels,
});

export default connect(mapStateToProps, { clickout, clearHotel })(Home);
