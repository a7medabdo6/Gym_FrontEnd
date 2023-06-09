import { View, Text,StyleSheet,ScrollView,TouchableOpacity ,Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { COLORS } from '../Ulits/COLORS';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

const Todaydrills = () => {
   
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
        <View style={{flex:1,marginHorizontal:20,marginTop:20}}>
        <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>
            <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
            <MaterialCommunityIcons  name="bell-alert-outline" size={30} color="green" />

            <AntDesign style={{marginHorizontal:20}} name="user" size={30} color="green" />
        
        <Text style={styles.text} >اسم المستخدم</Text>
            </View>

      <View>
      <AntDesign  name="menufold" size={30} color="green" />


      </View>

        </View>
        
        <View style={styles.timer}>
        <Text style={styles.text5} >  التدريبات اليوميه</Text>

        <CountdownCircleTimer
        
         isPlaying
       duration={7}
       colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
         >
       {({ remainingTime }) => <View style={styles.insideTimer}>
       <AntDesign  name="heart" size={50} color="red" />
       <Text style={styles.textTimer}>تدريب الهروله</Text>

       <Text>{remainingTime}</Text>
        
        </View>}
         </CountdownCircleTimer>
         <View style={styles.info}>
          
          <View style={styles.infoX} >
                
                <Text style={styles.text}> ادراج ملاحظه عن التمرين</Text>
                <AntDesign  name="infocirlceo" size={20} color="white" />
 
            </View>
         
            
            <View  style={styles.infoX}>
            <Text style={styles.text}> اتمام التدريب</Text>
            <MaterialIcons  name="done" size={20} color="white" />


            </View>

        </View>
        </View>
        <View style={styles.box}>
            <View style={styles.shadow}>
            <MaterialCommunityIcons  name="fire" size={100} color="#EC5823" />
            <Text>التمرين التالي</Text>

            </View>
            <View style={styles.shadow}>
            <MaterialCommunityIcons  name="shoe-print" size={100} color="#F6921E" />
            <Text>التمرين التالي</Text>

            </View>

        </View>
        </View>
      
    </Animated.View >
    </PanGestureHandler>

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
    box:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row-reverse",
        width:"100%"
        
    },
    text5:{
        fontSize:20,
      fontFamily:"Cairo-Bold",
      color:"black",
      marginBottom:40
    },
    timer: {
     width:"100%",
     height:"40%",
    marginTop:20,
     backgroundColor:"#F4F4F4",
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
    
      
    },
    insideTimer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
   
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
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
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"white"
    },
    textTimer:{
        fontSize:15,
      fontFamily:"Cairo-Bold",
    },
    shadow: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"60%",
        width:"40%",
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    marginVertical:"2%",
   
},

  });
export default Todaydrills