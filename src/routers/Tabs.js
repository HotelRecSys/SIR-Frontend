import React from "react";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Box } from "../components";
import { Home, Profile, SignIn, SignUp, Search, Top} from "../screens";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Tab = createBottomTabNavigator();

function TabNavigator({ visible }) {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      tabBarVisible={visible}
      //kendi tabbarımızı duzenlemek ıstersek
      // tabBar={(props) => (visible ? <TabBar {...props} /> : null)}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            color = focused ? "#FFF" : "#C6C2CB";
          } else if (route.name === "Search") {
            iconName = "search";
            color = focused ? "#FFF" : "#C6C2CB";
          } else if (route.name === "Profile") {
            iconName = "user";
            color = focused ? "#FFF" : "#C6C2CB";
          } else if (route.name === "Top") {
            iconName = "star";
            color = focused ? "#FFF" : "#C6C2CB";
          }

          // You can return any component that you like here!
          return (
            <Box
              bg={focused ? "#295BE0" : "#FFF"}
              p={10}
              style={{ borderRadius: 50 }}
            >
              <FontAwesomeIcon icon={iconName} size={25} color={color} />
            </Box>
          );
        },
        // tabBarLabel:({ focused, color, size }) =>{
        //   return <Text mt={-10} mb={10} color="#295BE0">{focused ? route.name : ""} </Text>
        // }
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "#2C2F4E",
        inactiveTintColor: "#fff5",
        showLabel: false,
        labelStyle: {
          fontSize: 13,
          marginBottom: 5,
        },
        style: {
          height: 85,
          borderTopRightRadius:35,
          borderTopLeftRadius:35,
          shadowColor: "#fff5",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.07,
          shadowRadius: 30,
          elevation: 11,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const mapStateToProps = ({ general }) => ({
  visible: general.tabVisible,
});
export default connect(mapStateToProps, {})(TabNavigator);
