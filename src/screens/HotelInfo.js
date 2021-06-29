import React, { useState, useEffect} from "react";
import { Image } from "react-native";
import { Text, Box, BackButton } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Rating } from "react-native-ratings";
import { clickout } from "../store/otels";
import { connect } from 'react-redux';

function HotelInfo({ route, clickout, user}) {
  const { id, name, city, country, score, address, properties, images } =
    route.params;
  const { height } = Dimensions.get("window");

  const property = properties.split("|");
  let img = images.split("\n");
  img = img.slice(0, -1);
  const [modalImage, setModalImage] = useState(0);
  const [modalVisible, setModalVisible] = useState("");

  useEffect(() => {
    clickout({'item_id': id, 'user_id': user?.id})
  }, [])

  var result = img.map((item) => ({ url: item }));

  return (
    <>
      <ScrollView>
        <Image
          source={{ uri: img[0] }}
          style={{ width: "100%", height: "40%", resizeMode: "cover" }}
        />
        <BackButton
          style={{
            position: "absolute",
            overflow: "hidden",
            top: 30,
            left: 0,
            paddingLeft: 20,
            paddingBottom: 15,
            paddingTop: 20,
            paddingRight: 10,
          }}
          iconColor={"#191B32"}
        />
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Text
            style={{
              fontSize: 23,
              padding: 10,
              fontWeight: "500",
              color: "#191B32",
              maxWidth: "65%",
            }}
          >
            {name}
          </Text>
          <Box flexDirection="row" p={10} style={{width:150}}>
            <FontAwesomeIcon icon="map-marker-alt" size={20} color="#5A65B3" />
            <Text
              style={{
                fontSize: 15,
                marginTop: 5,
                marginLeft: 5,
                fontWeight: "200",
                color: "#595864",
              }}
              numberOfLines={2}
            >
              {city}, {country}
            </Text>
          </Box>
        </Box>

        <Text
          style={{
            fontSize: 15,
            paddingLeft: 10,
            marginBottom: 5,
            fontWeight: "200",
            color: "#595864",
          }}
        >
          {address}
        </Text>
        <Box flexDirection="row" pl={10} pt={10}>
          <Rating
            style={{ alignSelf: "flex-start"}}
            startingValue={score}
            readonly={true}
            type="custom"
            ratingCount={10}
            ratingColor="#191B32"
            tintColor="#f0f0f0"
            ratingBackgroundColor="#CBCFEB"
            
            fractions={1}
            imageSize={20}
          />
          <Text
              style={{ fontSize: 18, color: "#191B32", alignSelf: "center" }}
            >
              {" "}
              {score}{" "}
            </Text>
        </Box>

        <Box style={{ maxHeight: height + 150 }}>
          <Box mx={10} style={{ height: height }}>
            <Text
              style={{
                fontSize: 23,
                marginBottom: 10,
                marginTop: 20,
                fontWeight: "500",
                color: "#191B32",
              }}
            >
              Properties
            </Text>
            <FlatList
              contentContainerStyle={{ flex: 1 }}
              scrollEnabled={false}
              data={property}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              numColumns={2}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{ flex: 1, paddingTop: 7 }}
                >
                  <Text
                    key={index}
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#191B32",
                    }}
                  >
                    · {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Box>
        </Box>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true}>
        <ImageViewer
          imageUrls={result}
          index={modalImage}
          enableSwipeDown
          onSwipeDown={() => setModalVisible(false)}
        />
      </Modal>

      <Box
        pb={20}
        style={{
          backgroundColor: "#CBCFEB",
          borderRadius: 25,
          borderColor: "#000",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            padding: 10,
            fontWeight: "500",
            marginLeft: 5,
            color: "#191B32",
          }}
        >
          Photos
        </Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={img}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setModalImage(index), setModalVisible(true);
              }}
            >
              <Image
                source={{ uri: item }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                  resizeMode: "cover",
                  margin: 8,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </Box>
    </>
  );
}

const mapStateToProps = ({ authentication }) => ({
  user : authentication.user,
});

export default connect(mapStateToProps, {clickout})(HotelInfo);
