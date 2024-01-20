import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

import bgOl from './assets/bg.png';






export default function App() {
  return (

    <ImageBackground source={bgOl} style={styles.container}>
   <Image style={styles.stretch} source={require('./assets/logo.png')}/>
   <View style={styles.map}>
    <View style={{ alignSelf:'center', width:"15%", height:'1%', backgroundColor:'#fff', borderRadius:10,}}/>
   <Text style={styles.fameli}>Семейный ресторан</Text>
   <Text style={styles.fameli}>08:00 - 22:00</Text>
   
     
     <View style={{flex:0.1,}}/>
   
      <TextInput  placeholder="8(777)999 20 22" keyboardType='numeric' placeholderTextColor="#fff" style={styles.Number}/>
   
    <View style={styles.Button}>
    <Button title="Sign in with Number" color="#fff" onClick={''} />
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
      flex: 0.7, 
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
     textAlign:'center',
     alignContent:'center',
      justifyContent:'center',
    },

    Number:{
      display:'flex',
      justifyContent:'center',
      alignSelf:"center",
      textAlign:'center',
      color:"#fff",
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      width:'70%',
      height:'13%',
      borderRadius:30,
      borderWidth:2,
      borderColor:'#000',
    },
   
  

   Button:{
    display:'flex',
    marginTop:'5%',
      justifyContent:'center',
      alignSelf:"center",
      color:"#fff",
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      width:'60%',
      height:'10%',
      borderRadius:30,
      borderWidth:2,
      borderColor:'#00fffc',
   },
   
});