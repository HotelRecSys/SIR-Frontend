/* eslint-disable no-irregular-whitespace */
import React from "react";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {Box, Text, BackButton} from '../index';

function Header({ isBackButton = false, title, subtitle = '', marginTop=35, icon = null}) {
  const navigation = useNavigation();

  return (
    <Box mx={15}>
      <Box flexDirection="row">
        {isBackButton && <BackButton />}
        <Text fontSize={40} color="#191B32" mt={marginTop} fontWeight="bold">
          {title}{" "}
        </Text>
        {icon}
      </Box>
      <Text fontSize={16} color="#A9B9CD" mt={5} mb={10}>
        {subtitle}{" "}
      </Text>
    </Box>
  );
}
const mapStateToProps = () => ({});
export default connect(mapStateToProps, {})(Header);
