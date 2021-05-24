/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { clearHotel } from "../../store/otels";

function BackButton(props) {
  const navigation = useNavigation();

  return (
    <Button onPress={() => {
      navigation.goBack()
    }} {...props} 
    justifyContent="flex-start"
    alignItems="flex-end"
    pb={10}
   >
       <FontAwesomeIcon
        style={{ marginRight: 10,  }}
        icon={"chevron-left"}
        size={25}
        color={props.iconColor || '#000'}
      />
    </Button>
  );
}
const mapStateToProps = () => ({
});
export default connect(mapStateToProps, { clearHotel})(BackButton);
