import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import bgOl from './assets/bg.png';






export default function App() {
  return (

    <ImageBackground source={bgOl} style={styles.container}>
   <Image style={styles.stretch} source={require('./assets/logo.png')}/>
   <View style={styles.map}>
    <View style={{ alignSelf:'center', width:"15%", height:'1%', backgroundColor:'#fff', borderRadius:10,}}/>
   <Text style={styles.fameli}>Семейный ресторан</Text>
   <Text style={styles.fameli}>08:00 - 22:00</Text>
   
      <View style={{height:'20%'}}/>

   <View style={styles.screenContainer}>
    
      <Button title="Sign in with Number" color="#fff"/>
    </View>
    <View style={styles.screenContainer2}>
      <Button title="Sign in with Apple" color="#fff" />
    </View>
    </View>




   
    
  
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: 'pink',
    justifyContent:'space-between',
    alignItems:'center'
  },
    
    stretch: {
      marginTop:'15%',
    },

    map:{
      width:'100%',
      height:'45%',
      backgroundColor:'rgba(0,0,0,0.5)',
      borderTopColor:'#000',
      borderWidth: 2,
      
      flex:'0.7', 
    },
    fameli:{
      flex:'0.2',
    color:"#FFF",
    fontFamily: 'Sansita',
    fontSize:"30%",
    fontStyle: 'normal', 
    fontWeight: '400',
    lineHeight: 'normal',
    textAlign:'center',
    },
    
    screenContainer:{
     
      width:'80%',
      height:'13%',
      backgroundColor:'rgba(0,0,0,0.5)',
     alignSelf:'center',
     borderRadius:'20',
     borderColor:'pink',
     borderWidth:'2',
    
    },

    screenContainer2:{
      marginTop:'10%',
      width:'80%',
      height:'13%',
      backgroundColor:'rgba(0,0,0,0.5)',
     alignSelf:'center',
      alignItems:'center',
     borderRadius:'20',
     borderColor:'pink',
     borderWidth:'2',
  
   
    },
   
});
