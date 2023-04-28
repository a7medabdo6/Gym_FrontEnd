import { View, Text ,StyleSheet,ScrollView,TouchableOpacity,Image, Linking} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutClinic from '../component/BodyAboutClinic';
import BodyAboutNormalClinic from '../component/BodyAboutNormalClinic';
import { COLORS } from '../Ulits/COLORS';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules
import {nativemodules} from 'react-native';

const Profile = () => {

 
    const navigation = useNavigation();
    const [token,settoken]=useState("")
    const [username,setusername]=useState("")
  
    async function printToken() {
      try {
        // قراءة قيمة الـ "Token" من Local Storage
        const token = await AsyncStorage.getItem('Token');
        const username = await AsyncStorage.getItem('username');
  
        if(token)
        settoken(token)
  
        if(username)
        setusername(username)
  
      } catch (error) {
        console.log('حدث خطأ في قراءة البيانات:', error);
      }
    }
    console.log('Token8888:', token);
    console.log('dataaaa:', username);
  
  
    // استدعاء الدالة لطباعة قيمة الـ "Token"
    printToken();

    const handelExit = async()=>{
      AsyncStorage.removeItem('Token');
      
      const token = await AsyncStorage.getItem('Token');
      RNRestart.Restart();
      // navigation.navigate('Wlc')

    }
  return (
    <View style={styles.page}>
         <View style={styles.header}>
         <Image  
               source={require('../../assets/images/menu-green.png')}
               style={styles.image}
            />     
               <Image 
               source={require('../../assets/images/notification.png')}
               style={styles.image}
            />
        </View>
        <View style={styles.body}>
            <View style={styles.avatar}>
            <AntDesign  name="user" size={80} color="white" />
            <View style={{position:"absolute",bottom:0,right:0}}>
            <AntDesign   name="camerao" size={40} color="white" />

            </View>


            
            </View>
            <Text style={styles.text}>{username} </Text>
            <View style={{backgroundColor:"#E2AC00",borderRadius:50,marginVertical:20}}>
            <AntDesign style={{padding:5}}  name="star" size={20} color="white" />


            </View>
            <ScrollView style={{width:"100%",marginBottom:"20%"}}>

            <TouchableOpacity style={styles.border} onPress={() => navigation.navigate('MySubscriptions')}>
            <View style={styles.border}>
                <Text style={styles.text1}>اشتركاتي</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.border}>
                <Text style={styles.text1}>الاشعارات والتنبيهات</Text>
            </View>

            <View style={styles.border}>
                <Text style={styles.text1}>اللغة</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.text1}>تقييم التطبيق</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.text1}>حسابي</Text>
            </View>
            <View style={[styles.border,{marginBottom:"1%"}]}>
                <Text style={styles.text1}>الاعدادات</Text>
            </View>
            <TouchableOpacity     onPress={handelExit}>

            <View style={[styles.border,{marginBottom:"20%"}]}>
                <Text style={styles.text1}>تسجيل الخروج</Text>
            </View>
            </TouchableOpacity>

            </ScrollView>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
     marginBottom:"20%"
  
    },
    page:{
      flex:1,
      marginBottom:"20%"
      
    },
    image:{
      height:35,
      width:40,
      color:"white"
  },
    border:{
        width:"100%",
        borderWidth:1,
borderColor:"grey",
borderRadius:5,
height:50,
display:"flex",
justifyContent:"center",
alignItems:"flex-end",
marginVertical:5

   },
   
    header:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        margin:"4%"
    },
    body:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"4%",
        marginBottom:50
    },
    
    avatar:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:COLORS.mainColor,
      width:100,
      height:100,
      borderRadius:100
        
    },
  
    text:{
      fontSize:17,
      fontFamily:"Cairo-Bold",
      color:"grey"
    },
    text1:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"grey",
        marginRight:20
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
  });

export default Profile