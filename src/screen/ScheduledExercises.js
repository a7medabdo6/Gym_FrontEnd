import { View, Text ,StyleSheet,ImageBackground,TouchableOpacity,ScrollView,FlatList,Dimensions} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiniCard from '../component/MiniCard';
import Card from '../component/Card';
import imgsourceFood from "../../assets/images/food.jpg"
import CardExercise from "../Ulits/CardExercise"
import { COLORS } from '../Ulits/COLORS';
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
const ScheduledExercises = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

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
     <View style={styles.header}>
        <AntDesign  name="menufold" size={30} color="green" />

        </View>
        <View style={styles.boxtop}>
        <ImageBackground source={require('../../assets/images/gym-4k.jpeg')} style={styles.backgroundImage}>
            <View style={styles.box1}>
            <Text style={styles.title}>عياده X للياقه البدنيه</Text>
            <View style={styles.info}>
              {/* <TouchableOpacity onPress={() => navigation.navigate('AboutGYM')}>
              <View style={styles.infoX} >
                    
                    <Text style={styles.text}>عن النادي</Text>
                    <AntDesign  name="infocirlceo" size={20} color="white" />

                </View>
              </TouchableOpacity> */}
                
                {/* <View  style={styles.infoX}>
                <Text style={styles.text}> تواصل معنا</Text>
                <AntDesign  name="user" size={20} color="white" />


                </View> */}

            </View>

            </View>
    </ImageBackground>
        </View>
        <View style={styles.titlebox}>
        <Text style={styles.textx}>التمارين المقرره يوميا</Text>

        </View>
        <FlatList
        data={DATA}
        renderItem={({item}) =>  <CardExercise item={item} />}      
         keyExtractor={item => item}
      />
        {/* <ScrollView style={{marginTop:20,backgroundColor:"red"}}>
            
            <CardExercise />
            <CardExercise />
            <CardExercise />

            <CardExercise />

        </ScrollView> */}
    </Animated.View>
    </PanGestureHandler>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      position:"absolute",
      paddingTop:150,
      
      
  
      
    },
    titlebox:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    },
    header:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        margin:"4%"
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
    textx:{
        fontSize:20,
        fontFamily:"Cairo-Bold",
        color:"black"
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


export default ScheduledExercises