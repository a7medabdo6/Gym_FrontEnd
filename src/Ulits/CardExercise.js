import { View, Text,ScrollView,StyleSheet, TouchableOpacity,ImageBackground, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from './COLORS';


const CardExercise = ({item}) => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text1} > التمرين الاول</Text>
        <Text style={styles.text2}>الخطوه الاولي </Text>
        <Text style={styles.text2}>الخطوه الثانيه </Text>
        <Text style={styles.text2}>الخطوه الثالثه </Text>

      </View>
      <View style={styles.border}>
      <Image
        style={styles.image}
        source={require('../../assets/images/iconImage.png')}
      />
      <View style={styles.check}>
      <AntDesign  name="check" size={25} color="white" />

      <Text style={styles.text3}>انهاء التمرين</Text>
      </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      display:"flex",
      justifyContent:"space-between",
      alignItems:"flex-start",
      flexDirection:"row-reverse",
      margin:20
    

  
      
    },
    text1:{
      fontSize:20,
      fontFamily:"Cairo-Bold",
      color:"black"
    },
    text2:{
      fontSize:15,
      fontFamily:"Cairo-Bold",
      color:"grey"
    },
    check:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row-reverse",
      backgroundColor:COLORS.mainColor,
      width:"80%",
      position:"absolute",
      bottom:0,
      borderRadius:50,
      transform: [{ translateX: -2 }, { translateY: 10 }],

    },

   text2:{
    fontSize:12,
    fontFamily:"Cairo-Bold",
    color:"grey"

   },
   text3:{
    fontSize:12,
    fontFamily:"Cairo-Bold",
    color:"white"

   },
    image: {
      width: 150,
      height: 150,
    },
    border:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderColor:"grey",
      borderWidth:1,
      position:"relative",
      width:180,
      height:180
    }


  });
export default CardExercise