import { View, Text,StyleSheet,ScrollView,TouchableOpacity,SafeAreaView ,Image, Dimensions} from 'react-native'
import React, { useCallback } from 'react'
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
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import SideBar from '../component/SideBar';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;
const Home = ({ navigation }) => {
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
      navigation.closeDrawer()
    }
  }, []);

  // const viewStyle = useAnimatedStyle(() => {
  //   const scale = interpolate(
  //     drawerProgress.value,
  //     [0,1],
  //     [1,0.8]
  //   )

  //   const borderRadius = interpolate(
  //     drawerProgress.value,
  //     [0,1],
  //     [1,40]
  //   )

  //   const rotate = interpolate(
  //     translateX.value,
  //     [0, SCREEN_WIDTH / 2],
  //     [0, 3],
  //     Extrapolate.CLAMP
  //   );
  //   return {
  //     transform: [{ scale }, {
        
  //       rotateY: `${rotate}deg`,
  //     },
  //     {
  //       translateX: translateX.value,
  //     },
  //   ],
  //     borderRadius
  //   }
  // })
  
  const {isLoading,isError,error,data} =  GetMenuApi()
  const {GetMenuData} = useSelector(state => state.GetMenuRedux)
  return (
    <View style={styles.pagestyle}>
      <SideBar />
    <PanGestureHandler onGestureEvent={panGestureEvent} >
    <Animated.View style={[styles.container,rStyle]}> 
 <ScrollView style={{flex:1,marginTop:25}}>
  <TopMenu navigation={navigation} noti={true} ava={true} name={true} onPress={onPress}/>
      
        <View>
          {
            GetMenuData?.data?.categoreis?.map((item,index)=>{
              return(
                <TouchableOpacity    onPress={() => navigation.navigate(
                  item?.title === "النوادي الرياضيه" ? 'Gym':item?.title === "عيادات التغذيه" ? 'Clinic':item?.title === "عيادات العلاج الطبيعي" ? 'NormalClinic':item?.title === "مطاعم الاكل الصحي" ? 'Resturant':   item?.title === "المتاجر" ? 'Stores':null,{
                    itemId: item?.id

                  }
            
                  )}>
                <Card titletext={item?.title} text={item?.desc} imageSource={"http://104.248.26.82/api/public/" + item?.cover} id={item?.id}/>
                </TouchableOpacity>
              )
            })
          }
     
       
        </View>
    </ScrollView>
    </Animated.View>
    </PanGestureHandler>
    </View>
   


  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom:"5%",
      backgroundColor:"white"

  
      
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
    pagestyle:{flex:1,backgroundColor:"green",flexDirection:"row"}
  });
export default Home