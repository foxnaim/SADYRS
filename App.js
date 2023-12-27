import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Button} from 'react-native';
import bgOl from './assets/bg.png';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fasthand&family=Handlee&family=Sansita&display=swap');
</style>




export default function App() {
  return (

    <ImageBackground source={bgOl} style={styles.container}>
   <Image style={styles.stretch} source={require('./assets/logo.png')}/>
   <View style={styles.map}>
    <View style={{ alignSelf:'center', width:"15%", height:'1%', backgroundColor:'#fff', borderRadius:10,}}/>
   <Text style={styles.fameli}>Семейный ресторан</Text>
   <Text style={styles.fameli}>08:00 - 22:00</Text>
   <Button title="Sign in with Number" onPress={() => alert.alert('Simple Button pressed')}  style={styles.Button_Number} />
      <Button title="Sign in with Apple" onPress={() => alert.alert('Simple Button pressed')}
      />
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
    
    Button_Number:{
      backgroundColor:'rgba(0,0,0,0.5)',
    },
});