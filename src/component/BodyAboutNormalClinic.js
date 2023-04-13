import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Ulits/COLORS';
import Button from "../Ulits/Button"
import { useNavigation } from '@react-navigation/native';
const BodyAboutNormalClinic = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
            <Image 
               source={require('../../assets/images/undraw.png')}
               style={styles.image}
            />
            </View>
            <Text style={styles.text}>عياده X للعلاج الطبيعي</Text>
            <Text style={styles.title}>تاسست عياده x في عام 1992 علي يد اكبر الاطباء خبره وهي مختصه فالصحه والتغذيه السليمه</Text>
            <Button text="منتجاتنا" bckColor={COLORS.mainColor}/>
            <TouchableOpacity     onPress={() => navigation.navigate('ContactUs')}>
            <Button text="تواصل معنا" bckColor={COLORS.mainColor}/>
            </TouchableOpacity>
            
            <TouchableOpacity     onPress={() => navigation.navigate('Todaydrills')}>
            <Button text="التدريبات اليوميه" bckColor={COLORS.mainColor}/>
            </TouchableOpacity>

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
export default BodyAboutNormalClinic