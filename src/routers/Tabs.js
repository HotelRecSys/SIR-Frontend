import React from "react";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Profile } from "../screens";
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
            color = focused ? "black" : "red";
          } else if (route.name === "Profile") {
            iconName = "user-circle";
            color = focused ? "black" : "red";
          }

          // You can return any component that you like here!
          return <FontAwesomeIcon icon={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const mapStateToProps = ({ general }) => ({
  visible: general.tabVisible,
});
export default connect(mapStateToProps, {})(TabNavigator);
