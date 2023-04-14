import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from './COLORS';

const Button = ({text,bckColor}) => {
  return (
    <View style={[styles.buttonContainer,{backgroundColor:bckColor}]}>
            <Text style={styles.buttonText} >{text}</Text>

            </View>
  )
}
const styles = StyleSheet.create({
   
    buttonContainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      height:60,
      width:250,
      // backgroundColor:COLORS.mainColor,
      color:"white",
      borderRadius:50,
      marginTop:30
    },
    buttonText:{
        color:"white",
        fontSize:20,
        fontFamily:"bold",
        fontFamily:"Cairo-Bold",

    }
  });
export default Button