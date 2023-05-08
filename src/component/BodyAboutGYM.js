import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../Ulits/COLORS';
import Button from "../Ulits/Button"
const BodyAboutGYM = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
            <Image 
               source={require('../../assets/images/undraw.png')}
               style={styles.image}
            />
            </View>
            <Text style={styles.text}>  {item?.name}</Text>
            <Text style={styles.title}>تاسس النادي عام 1990 علي يد افضل المدربين  العرب والعالميين ومنهم المدرب يايسن جادو الحاصل على المركز الاول على العالم </Text>
            <Button text="   تواصل معنا" bckColor={COLORS.mainColor}/>

            <Button text="  تفاصيل الاشتراك" bckColor={COLORS.mainColor}/>

            <Button text="قيم هذا المكان" bckColor={COLORS.mainColor}/>


    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     marginBottom:"20%"
  
    },
    image:{
        height:300,
        width:300
    },
    body:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
        
    },
    title:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"grey",
        textAlign:"center",
        marginTop:20,
        marginHorizontal:20
    },
  
    text:{
      fontSize:25,
      fontFamily:"Cairo-Bold",
      color:"grey"
    },
    buttonContainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      height:60,
      width:250,
      backgroundColor:COLORS.mainColor,
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
export default BodyAboutGYM