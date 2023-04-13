import { View, Text,ScrollView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import imgsourceGym from "../../assets/images/gym.jpg"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../Ulits/COLORS';
import MiniCard from './MiniCard';
import { useNavigation } from '@react-navigation/native';

const CardDetailsGym = () => {
    const navigation = useNavigation();

  return (
    <View style={{flex:1,marginBottom:"20%",backgroundColor:"white"}}>
        <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginHorizontal:20,paddingVertical:20}}>
            <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
            <Entypo style={styles.icon} name="location-pin" size={30} color="white" />
            <Entypo  name="triangle-down" size={15} color="black" />

            <Text style={styles.text} >طبربور </Text>

            <Entypo style={styles.icon} name="location-pin" size={30} color="white" />
            <Entypo  name="triangle-down" size={15} color="black" />

            

        <Text style={styles.text} > منطقه السوق</Text>
            </View>

      <View>
      <AntDesign  name="menufold" size={30} color="green" />


      </View>

        </View>
        


        <ScrollView>
        <Card titletext=" النوادي الرياضيه" text="ستجد افضل  النوادي الرياضيه القريبه اليك مع افضل   العروض الترويجيه" imageSource={imgsourceGym}/>

        <TouchableOpacity onPress={() => navigation.navigate('CardInfoGym')}>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>
        </TouchableOpacity>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>

        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>

        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>

        </ScrollView>
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
    icon: {
     padding:1,
     backgroundColor:COLORS.mainColor,
     borderRadius:50,
     marginHorizontal:5
      
    },
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"black"
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

export default  CardDetailsGym