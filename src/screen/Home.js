import { View, Text,StyleSheet,ScrollView,TouchableOpacity,SafeAreaView ,Image} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../component/Card';
import imgsourceGym from "../../assets/images/gym.jpg"
import imgsourceFood from "../../assets/images/food.jpg"
import imgsourceclinic from "../../assets/images/clinic.jpg"
import imgsourceres from "../../assets/images/res.jpg"
import imgsourcestores from "../../assets/images/stores.jpg"
import { GetMenuApi } from '../server/Hook/Menu/Get-Menu-Hook';
import { useSelector } from 'react-redux';
import TopMenu from '../component/TopMenu';


const Home = ({ navigation }) => {

  const {isLoading,isError,error,data} =  GetMenuApi()
  const {GetMenuData} = useSelector(state => state.GetMenuRedux)
  // console.log(GetMenuData?.data?.categoreis[1]?.cover,"888888888888888888888888888888888888888888");
  return (
    <SafeAreaView style={{flex:1,marginBottom:"20%"}}> 
 <ScrollView style={{flex:1,marginTop:25}}>
  <TopMenu navigation={navigation}/>
        {/* <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginHorizontal:20}}>
            <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
            <Image 
               source={require('../../assets/images/notification.png')}
               style={styles.image}
            />
 <Image 
               source={require('../../assets/images/profile-green.png')}
               style={[styles.image,{marginHorizontal:15  }]}
            />        
        <Text style={styles.text} >اسم المستخدم</Text>
            </View>

            <View >
    <Image 
               source={require('../../assets/images/menu-green.png')}
               style={styles.image}
            />

      </View>

        </View> */}
        <View>
          {
            GetMenuData?.data?.categoreis?.map((item,index)=>{
              return(
                <TouchableOpacity    onPress={() => navigation.navigate(
                  item?.title === "النوادي الرياضيه" ? 'Gym':item?.title === "عيادات التغذية" ? 'Clinic':item?.title === "عيادات العلاج الطبيعي" ? 'NormalClinic':item?.title === "مطاعم الاكل الصحي" ? 'Clinic':   item?.title === "المتاجر" ? 'Stores':null,{
                    itemId: item?.id

                  }
            
                  )}>
                <Card titletext={item?.title} text={item?.desc} imageSource={"http://167.71.56.133/api/public/" + item?.cover} id={item?.id}/>
                </TouchableOpacity>
              )
            })
          }
     
        {/* <TouchableOpacity     onPress={() => navigation.navigate('Clinic')}>
          <Card titletext="عيادات التغذيه" text="ستجد افضل عيادات التغذيه القريبه اليك مع افضل الاسعار والخصومات والعروض" imageSource={imgsourceFood}/>
          </TouchableOpacity>

          <TouchableOpacity     onPress={() => navigation.navigate('NormalClinic')}>
          <Card titletext="عيادات العلاج الطبيعي" text="ستجد افضل عيادات العلاج الطبيعي اليك مع افضل الاسعار والخصومات والعروض" imageSource={imgsourceclinic}/>
          </TouchableOpacity>

          <TouchableOpacity     onPress={() => navigation.navigate('NormalClinic')}>
          <Card titletext="  مطاعم الاكل الصحي" text="ستجد افضل عيادات العلاج الطبيعي اليك مع افضل الاسعار والخصومات والعروض" imageSource={imgsourceres}/>
          </TouchableOpacity>

          <TouchableOpacity     onPress={() => navigation.navigate('Stores')}>
          <Card titletext="   المتاجر " text="ستجد افضل عيادات العلاج الطبيعي اليك مع افضل الاسعار والخصومات والعروض" imageSource={imgsourcestores}/>
          </TouchableOpacity> */}
        </View>
    </ScrollView>
    </SafeAreaView>
   
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
    input: {
      height: 50,
      backgroundColor: '#fff',
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor:"black",
      borderBottomWidth:1
      
    },
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"#8cb63f",
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
  });
export default Home