import { View, Text,ScrollView,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Card from './Card'
import imgsourceGym from "../../assets/images/gym.jpg"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../Ulits/COLORS';
import MiniCard from './MiniCard';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown'
import { GetBusinesApi } from '../server/Hook/Menu/Get-Busines-Hook';
import { useSelector } from 'react-redux';
import { GetMenuApi } from '../server/Hook/Menu/Get-Menu-Hook';
const CradDetailsResturant = ({itemId}) => {

  const {data:menu} =  GetMenuApi()
  const {GetMenuData} = useSelector(state => state.GetMenuRedux)


  const {isLoading,isError,error,data:bus} =  GetBusinesApi(itemId)
  const {GetBusinesData} = useSelector(state => state.GetBusinesRedux)
  console.log(GetBusinesData?.data?.busines,"9999999999999999");
    const navigation = useNavigation();
    const countries = ["Egyptvvvvvvvvvvvvvvvvvvvvvvvvv", "Canada", "Australia", "Ireland"]

    const [selected, setSelected] = React.useState("");
    const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return (
    <View style={{flex:1,marginBottom:"20%",backgroundColor:"white",position:"relative"}}>
        <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginHorizontal:20,paddingVertical:20}}>
            <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
            <Entypo style={styles.icon} name="location-pin" size={30} color="white" />
            <Entypo  name="triangle-down" size={15} color="black" />

            <Text style={styles.text} >طبربور </Text>

            <Entypo style={styles.icon} name="location-pin" size={30} color="white" />
            <Entypo  name="triangle-down" size={15} color="black" />

            <SelectDropdown
	data={countries}
  buttonStyle={{backgroundColor:"transparent",width:"50%"}}
  defaultButtonText={
    <Text style={styles.text}> منطقه السوق</Text>
  }
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
            {/* <SelectList
  setSelected={(val) => setSelected(val)}
  data={data}
  placeholder={<Text style={styles.text}> منطقه السوق</Text>}
  boxStyles={{ borderColor: "white", position: "absolute", borderWidth: 0,top:"-5%",right:"25%" }}
  dropdownStyles={{ border: "none", borderWidth: 0 ,zIndex:1}}
  save="value"
/> */}
        {/* <Text style={styles.text} > منطقه السوق</Text> */}
            </View>

      {/* <View>
      <Image 
               source={require('../../assets/images/menu-green.png')}
               style={styles.image}
            />

      </View> */}

        </View>
        


        <ScrollView>
        <Card titletext="  مطاعم الاكل الصحي" text="ستجد افضل  النوادي الرياضيه القريبه اليك مع افضل   العروض الترويجيه" imageSource={"http://104.248.26.82/api/public/" + GetMenuData?.data?.categoreis[0]?.cover}/>


        {
          GetBusinesData?.data?.busines.map((item,index)=>{
            return(
              <TouchableOpacity onPress={() => navigation.navigate('CardInfoResturant',{item})}>
        <MiniCard title={item?.name} itemId={item?.id} text="مطعم  متخصص فيالاكلات الصحيه وافضلها ب اسعار تناسب الجميع" adress="  طبربور  - بالقرب من -" item={item} />
        </TouchableOpacity> 
            )
          })
        }

        {/* <TouchableOpacity onPress={() => navigation.navigate('CardInfoGym')}>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>
        </TouchableOpacity>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>

        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>

        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/>
        <MiniCard title="نادي X GYM " text="نادي متخصص واحدث الماكينات واقوي المدربين" adress="  طبربور  - بالقرب من -"/> */}

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
      color:"black",
      padding:0,
      textAlign:"left"

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


export default CradDetailsResturant