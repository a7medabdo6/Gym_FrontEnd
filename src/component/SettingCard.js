import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingCard = ({icon,text,title}) => {
  return (
    <View style={styles.box1}>
    <View > 
      {icon}
</View>
    <View style={{marginRight:"10%"}}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.grey}>{title}</Text>

    </View>

  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 20,
      position:"absolute",
      top:80,
      width:"100%",
      paddingTop:150,
      height:"91%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      zIndex:1
  
      
    },
    box1:{
     display:"flex",
     justifyContent:"space-around",
     alignItems:"center",
     flexDirection:"row",
     marginBottom:50
  },
    icon: {
    
      
    },
    text:{
      fontSize:15,
      color:"black"
    },
   
    title:{
      fontSize:12,
      fontFamily:"400",
      color:"grey"
    },
    image:{
      height:35,
      width:40,
      color:"white"
  },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    size:{
    fontSize:"5%"
    },
  
  });

export default SettingCard