import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Text, Box } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Title } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { logout } from "../store/auth";
import { connect } from 'react-redux';


function Profile({logout, user}) {
  const items = [
    {
      name:'Simge Tiraş',
      location: 'France',
      email:'simgetirass@gmail.com'
    },
  ];
  return (
    <Box style = {styles.root}>
      <LinearGradient 
      colors = {["#295BE0","#859dde"]}
      style ={{height:"30%"}}
      />

      <Box alignItems= "center">
      {/* <Box
              
              p={10}
              style={{ borderRadius: 50, alignItems: "center" }}
            >
              <FontAwesomeIcon icon="user-circle" size={100}  />
      </Box> */}
         <Image 
          style= {{width :140, height:140, borderRadius:50, marginTop: -50}}
          source={require('../../assets/profile/ilcun.jpg')}
          
          /> 
      </Box>
      <Box style ={styles.mytext}>
          <Title style= {{textAlign:'center'}}>{user?.name || items[0].name} </Title>
          <Text style={{marginTop:10}}>{<FontAwesomeIcon icon="map-marker-alt" size={24} color="#A9B9CD" />} {user?.country || items[0].location}</Text>
          <Text style={{marginTop:10}}>{<FontAwesomeIcon icon="envelope-open" size={24} color="#A9B9CD"/>} {user?.email || items[0].email}</Text>
      </Box>
          
    
      <Box style= {{flexDirection: "row", justifyContent:"space-around"}}>
          
          <Button onPress ={()=> logout()} style= {{padding:10, borderRadius:10, justifyContent:"center", alignItems:"center", backgroundColor:"#295BE0", marginTop:20}}>
            <Text style= {{color:"#fff"}}>{"Logout"}</Text>
          </Button>
      </Box>

    </Box>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: "#fff",
  },
  mycard:{
    margin:3,
    marginTop: 20,
  },
  cardContent:{
    flexDirection:"row",
    padding : 8,
    
  },
  mytext:{
    alignSelf:'center',
    fontSize:18,
    marginTop: 3,
  }
})


const mapStateToProps = ({ authentication }) => ({
  isLoggedIn: true,
  user: authentication.user
});

export default connect(mapStateToProps, {logout})(Profile);

