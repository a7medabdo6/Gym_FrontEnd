import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import { COLORS } from '../Ulits/COLORS';

const CardOfer = ({bckColor,color,text,title}) => {

  return (
    <ScrollView style={[styles.container,{backgroundColor:bckColor}]}>
      <Text style={[styles.title,{color:color}]}>{text}</Text>
      <Text style={[styles.text,{color:color}]}>{title}</Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      
      // backgroundColor: '#F4F4F4',
      // justifyContent: 'center',
      paddingHorizontal: 20,
     marginVertical:20,
      width:"100%",
      paddingHorizontal:20,
      borderRadius:10,
      borderWidth:1,
   
  
      
    },
    
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      // color:"grey",
      marginVertical:10

    },
    title:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        // color:"grey",
        marginVertical:10
      },
   
  });

export default CardOfer