import { View, Text ,StyleSheet,Image,Dimensions} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutClinic from '../component/BodyAboutClinic';
import BodyAboutNormalClinic from '../component/BodyAboutNormalClinic';
import { COLORS } from '../Ulits/COLORS';
import { useNavigation } from '@react-navigation/native';
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
const MySubscriptions = () => {
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
        <MaterialCommunityIcons  name="bell-alert-outline" size={30} color="green" />

        </View>
<View style={styles.body}>
<View style={styles.avatar}>
            <AntDesign  name="user" size={100} color="white" />

            </View>
            <Text style={styles.text}> محمد كريم</Text>
            <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />

<Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />


<Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />

<Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />
            <View >
      

      
    </View>

</View>
        
    </Animated.View>
    </PanGestureHandler>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        flexDirection: 'row',
        position: 'relative',
        backgroundColor:"red",
        transform: [ {skewY: '10deg'}],
      },
      tinyLogo:{
        width:"100%",
        height:50,
        marginVertical:20
      },
      trapezoid: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 50,
        borderColor: 'transparent',
        position: 'absolute',
      },
      left: {
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 100,
        borderColor: 'transparent transparent transparent blue',
        left: 0,
        top: 0,
      },
      right: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 100,
        borderColor: 'transparent blue transparent transparent',
        right: 0,
        bottom: 0,
      },
      rectangle: {
        position: 'absolute',
        top: 0,
        left: 50,
        width: 100,
        height: 100,
        backgroundColor: 'red',
        transform: [{ skewX: '-45deg' }],
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
        margin:"4%"
    },
    avatar:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:COLORS.mainColor,
      width:150,
      height:150,
      borderRadius:100
        
    },
  
    text:{
      fontSize:20,
      fontFamily:"Cairo-Bold",
      color:"green",
      marginVertical:10
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
    pagestyle:{flex:1,backgroundColor:"red",flexDirection:"row"}
  });

export default MySubscriptions