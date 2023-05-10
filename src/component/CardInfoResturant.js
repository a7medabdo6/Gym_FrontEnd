import { View, Text,ScrollView,StyleSheet, TouchableOpacity,ImageBackground,Image,Dimensions } from 'react-native'
import Card from './Card'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MiniCard from './MiniCard';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Ulits/COLORS';
import CardOfer from './CardOfer';
import { useSelector } from 'react-redux';
import { UseGetOffersApi } from '../server/Api/Offers/Use-Get-Offers-Api';
import { GetOffersApi } from '../server/Hook/Offers/Get-Offers-Hook';
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
const CardInfoResturant = ({navigation,name,route}) => {
  const { item } = route.params;

  const [itemid,setitemid]   = useState(item?.id)
  const {isLoading,isError,error,data} = GetOffersApi(itemid)
  const {GetOffersData} = useSelector(state => state.GetOffersRedux)

  console.log(GetOffersData?.data?.businesoffer,77777777777);

  const translateX = useSharedValue(0);


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

    <Animated.View style={[styles.container,rStyle]}>    
         <View style={{margin:20}}>
        <Image 
               source={require('../../assets/images/menu-green.png')}
               style={styles.image}
            />
        </View>
       
        <View style={styles.boxtop}>
        <ImageBackground source={require('../../assets/images/gym-4k.jpeg')} style={styles.backgroundImage}>
            <View style={styles.box1}>
            <Text style={styles.title}> {item?.name}  </Text>
            <View style={styles.info}>
              <TouchableOpacity onPress={() => navigation.navigate('AboutGYM',{item})}>
              <View style={styles.infoX} >
                    
                    <Text style={styles.text}>عن المطعم</Text>
                    <AntDesign  name="infocirlceo" size={20} color="white" />

                </View>
              </TouchableOpacity>
                
                <View  style={styles.infoX}>
                <Text style={styles.text}> تواصل معنا</Text>
                <AntDesign  name="user" size={20} color="white" />


                </View>

            </View>

            </View>
    </ImageBackground>
        </View>

        
      <ScrollView style={{marginHorizontal:20}}>
        {
          GetOffersData?.data?.businesoffer.map((item)=>{return(
            <CardOfer text={item?.name} title={item?.desc} bckColor="#F4F4F4" color="grey"/>

          )})
        }
        
       
      </ScrollView>
      </Animated.View>
    </PanGestureHandler>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:"white"
      
      
  
      
    },
    pagestyle:{flex:1,backgroundColor:"#CCCCCC",flexDirection:"row"},

    image:{
      height:35,
      width:40,
      color:"white"
  },
    box1:{
        position:"relative",
        justifyContent:"space-between",
        alignItems:"center",
        height:200,
        width:"100%",
        zIndex:2
        
      
       
    },
    boxtop:{
        position:"relative",
        height:200,
        marginHorizontal:20,
        

    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:"center",
        height:200,
        position:"relative",
        borderRadius:20,
        overflow:"hidden"

        
      },
    icon: {
     padding:5,
     backgroundColor:COLORS.mainColor,
     borderRadius:50
      
    },
    title:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"white",
       backgroundColor:COLORS.mainColor,
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:20,
        marginTop:5
    },
    text:{
      fontSize:15,
      fontFamily:"Cairo-Bold",
      color:"white"
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    info:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
       

},

infoX:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    fontFamily:"Cairo-Bold",
    color:"white",
   backgroundColor:COLORS.mainColor,
    paddingHorizontal:10,
    borderRadius:20,
    marginHorizontal:10,
    marginVertical:"2%"
},


  });

export default CardInfoResturant