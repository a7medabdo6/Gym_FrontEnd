import { View, Text ,StyleSheet,Image,ScrollView,Dimensions} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutGYM from '../component/BodyAboutGYM';
import BodyAboutStores from '../component/BodyAboutStores';
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
const AboutStores = ({route}) => {
  const { item } = route.params;
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
            <BodyAboutStores item={item}/>
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
      alignItems:"center"
        
    },
    image:{
      height:35,
      width:40,
      color:"white"
  },

   
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"green"
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    
  size:{
    fontSize:"5%"
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    pagestyle:{flex:1,backgroundColor:"#cccccc",flexDirection:"row"}
  });


export default AboutStores