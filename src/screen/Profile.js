import { View, Text,StyleSheet,ScrollView,TouchableOpacity,SafeAreaView ,Image, Dimensions} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutClinic from '../component/BodyAboutClinic';
import BodyAboutNormalClinic from '../component/BodyAboutNormalClinic';
import { COLORS } from '../Ulits/COLORS';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules
import {nativemodules} from 'react-native';
import TopMenu from '../component/TopMenu';
import { useDispatch } from 'react-redux';
import { SignInDataInfo } from '../server/Redux/Auth/SignIn-Redux';
import { useDrawerProgress } from '@react-navigation/drawer';
import React, { useCallback, useState } from 'react'

import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import SideBar from '../component/SideBar';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;
const Profile = () => {

 
    const navigation = useNavigation();
    const [token,settoken]=useState("")
    const [username,setusername]=useState("")
    const [Photo, setPhoto] = useState(false);

    async function printToken() {
      try {
        // قراءة قيمة الـ "Token" من Local Storage
        const token = await AsyncStorage.getItem('Token');
        const username = await AsyncStorage.getItem('username');
        const avatar = await AsyncStorage.getItem('avatar');

  
        if(token)
        settoken(token)
  
        if(username)
        setusername(username)
  
        if(avatar)
        setPhoto(avatar)
      } catch (error) {
        console.log('حدث خطأ في قراءة البيانات:', error);
      }
    }
    console.log('Token8888:', token);
    console.log('dataaaa:', username);
  
  
    // استدعاء الدالة لطباعة قيمة الـ "Token"
    printToken();
    const dispatch = useDispatch();

    const handelExit = async()=>{
      AsyncStorage.removeItem('Token');
      const token = await AsyncStorage.getItem('Token');
      dispatch(SignInDataInfo());

console.log(token,".......................");
      // const token = await AsyncStorage.getItem('Token');
      // RNRestart.restart();
      navigation.navigate('wlc')

    }


    const translateX = useSharedValue(0);

    const drawerProgress = useDrawerProgress()
  
    const panGestureEvent = useAnimatedGestureHandler({
      onStart: (_, context) => {
        context.x = translateX.value;
      },
      onActive: (event, context) => {
        // I forgot to wrap the translationX with Math.max in the video :/
        // It must be done in order to clamp the right axis scroll
        translateX.value = Math.max(event.translationX + context.x, 0);
      },
      onEnd: () => {
        if (translateX.value <= THRESHOLD) {
          translateX.value = withTiming(0);
        } else {
          translateX.value = withTiming(SCREEN_WIDTH / 2);
          
        }
      },
    });
  
    const rStyle = useAnimatedStyle(() => {
      const rotate = interpolate(
        translateX.value,
        [0, SCREEN_WIDTH / 4],
        [0, 3],
        Extrapolate.CLAMP
      );
  
      const borderRadius = interpolate(
        translateX.value,
        [0, SCREEN_WIDTH / 4],
        [0, 15],
        Extrapolate.CLAMP
      );
  
      return {
        borderRadius,
        transform: [
          { perspective: 100 },
          {
            translateX: translateX.value,
          },
          {
            rotateY: `-${rotate}deg`,
          },
        ],
      };
    }, []);
    const onPress = useCallback(() => {
      if (translateX.value > 0) {
        translateX.value = withTiming(0);
        
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
        // navigation.openDrawer()
      }
    }, []);
  return (
    <View style={styles.pagestyle}>
            <SideBar />

    <PanGestureHandler onGestureEvent={panGestureEvent} >

    <Animated.View style={[styles.page,rStyle]}>
          <TopMenu navigation={navigation} noti={true} ava={false} name={false}/>

        <View style={styles.body}>
            <View style={styles.avatar}>
              {
                Photo ? ( <Image 
                  source={{ uri: `http://104.248.26.82/api/public/${Photo}` }}
                  style={{marginHorizontal:15,width:100,height:100,borderRadius:50  }}
               />):( <Image 
                  source={require('../../assets/images/profile-green.png')}
                  style={[styles.image,{marginHorizontal:15  }]}
               />)
              }
           
            {/* <AntDesign  name="user" size={80} color="white" /> */}
            <View style={{position:"absolute",bottom:0,right:0}}>
            <AntDesign   name="camerao" size={30} color="white" />

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

    </Animated.View>
    </PanGestureHandler>

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
      
      backgroundColor: 'white',


      
    },
    image:{
      height:35,
      width:40,
      color:"white",
      borderRadius: 5,

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
    image:{
      height:100,
      width:100,
      color:"white"
  },
  pagestyle:{flex:1,backgroundColor:"red",flexDirection:"row"}

  });

export default Profile