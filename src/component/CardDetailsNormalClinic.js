import { View, Text,ScrollView,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Card from './Card'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../Ulits/COLORS';
import MiniCard from './MiniCard';
import imgsourceFood from "../../assets/images/food.jpg"
import { useNavigation } from '@react-navigation/native';
import imgsourceclinic from "../../assets/images/clinic.jpg"
import { GetMenuApi } from '../server/Hook/Menu/Get-Menu-Hook';
import { useSelector } from 'react-redux';
import { GetBusinesApi } from '../server/Hook/Menu/Get-Busines-Hook';

const CardDetailsNormalClinic = ({itemId}) => {
    const navigation = useNavigation();

    const {data:menu} =  GetMenuApi()
    const {GetMenuData} = useSelector(state => state.GetMenuRedux)
  
  
    const {isLoading,isError,error,data:bus} =  GetBusinesApi(itemId)
    const {GetBusinesData} = useSelector(state => state.GetBusinesRedux)

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
  <Image 
               source={require('../../assets/images/menu-green.png')}
               style={styles.image}
            />

  </View>

    </View>
    


    <ScrollView>
    <Card titletext="عيادات العلاج الطبيعي" text="ستجد افضل عيادات العلاج الطبيعي اليك مع افضل الاسعار والخصومات والعروض" imageSource={"http://167.71.56.133/api/public/" + GetMenuData?.data?.categoreis[2]?.cover}/>
    {
          GetBusinesData?.data?.busines.map((item,index)=>{
            return(
              <TouchableOpacity onPress={() => navigation.navigate('CardInfoNoramlClinic')}>
        <MiniCard title={item?.name} text="عياده متخصصه    بالعلاج الطبيعي وعلاج الالم المفاصل " adress="  طبربور  - بالقرب من -"/>
        </TouchableOpacity>
            )
          })
        }

    {/* <TouchableOpacity onPress={() => navigation.navigate('CardInfoNoramlClinic')}>
    <MiniCard title="عياده X  للعلاج الطبيعي " text="عياده متخصصه    بالعلاج الطبيعي وعلاج الالم المفاصل " adress="المقابلين - الشارع الرئيسي"/>
    </TouchableOpacity>
    <MiniCard title="عياده X للياقه البدنيه " text="عياده متخصصه بالتغذيه الصحيه والمناسبه للاشخاص " adress=" جبل الحسين - دوار فراس"/>

    <MiniCard title="عياده X للياقه البدنيه " text="عياده متخصصه بالتغذيه الصحيه والمناسبه للاشخاص " adress=" جبل الحسين - دوار فراس"/>

    <MiniCard title="عياده X للياقه البدنيه " text="عياده متخصصه بالتغذيه الصحيه والمناسبه للاشخاص " adress=" جبل الحسين - دوار فراس"/>
    <MiniCard title="عياده X للياقه البدنيه " text="عياده متخصصه بالتغذيه الصحيه والمناسبه للاشخاص " adress=" جبل الحسين - دوار فراس"/>
    <MiniCard title="عياده X للياقه البدنيه " text="عياده متخصصه بالتغذيه الصحيه والمناسبه للاشخاص " adress=" جبل الحسين - دوار فراس"/> */}

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
    image:{
      height:35,
      width:40,
      color:"white"
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

export default CardDetailsNormalClinic