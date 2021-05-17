import React from 'react';
import { View, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Box, BottomSheetArea } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Title, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Button } from 'react-native-paper';
import reducer from '../store/reducer';



function Profile() {
  const items = [
    {
      name:'Simge Tiraş',
      location: 'France',
      email:'simgetirass@gmail.com'
    },
  ];
  return (
    <View style = {styles.root}>
      <LinearGradient 
      colors = {["#295BE0","#859dde"]}
      style ={{height:"30%"}}
      />

      <View >
      <Box
              
              p={10}
              style={{ borderRadius: 50, alignItems: "center" }}
            >
              <FontAwesomeIcon icon="user-circle" size={100}  />
      </Box>
          {/* <Image 
          style= {{width :140, height:140, borderRadius:50, marginTop: -50}}
          source ={{uri:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
          /> */}
      </View>
      <View style ={styles.mytext}>
          <Title style= {{textAlign:'center'}}>{items[0].name} </Title>
          <Text style={{marginTop:10}}>{<FontAwesomeIcon icon="map-marker-alt" size={24} color="#A9B9CD" />} {items[0].location}</Text>
          <Text style={{marginTop:10}}>{<FontAwesomeIcon icon="envelope-open" size={24} color="#A9B9CD"/>} {items[0].email}</Text>
      </View>
          
    
      <View style= {{flexDirection: "row", justifyContent:"space-around"}}>
          
          <TouchableOpacity onPress ={()=> this.logout()} style= {{padding:10, borderRadius:10, justifyContent:"center", alignItems:"center", backgroundColor:"#295BE0", marginTop:20}}>
       
          <Text style= {{color:"#fff"}}>{"Logout"}</Text>
          </TouchableOpacity>
      </View>

    </View>
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

export default Profile;
