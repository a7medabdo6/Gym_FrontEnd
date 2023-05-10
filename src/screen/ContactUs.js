import { View, Text,StyleSheet,ScrollView,TouchableOpacity,SafeAreaView,Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../component/Card';
import imgsourceGym from "../../assets/images/gym.jpg"
import imgsourceFood from "../../assets/images/food.jpg"
import imgsourceclinic from "../../assets/images/clinic.jpg"
import imgsourceres from "../../assets/images/res.jpg"
import imgsourcestores from "../../assets/images/stores.jpg"
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
const ContactUs = () => {
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
       <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginHorizontal:20}}>
            <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
            <MaterialCommunityIcons  name="bell-alert-outline" size={30} color="green" />

            <AntDesign style={{marginHorizontal:20}} name="user" size={30} color="green" />
        
        <Text style={styles.text} >اسم المستخدم</Text>
            </View>

      <View>
      <AntDesign  name="menufold" size={30} color="green" />


      </View>

        </View>
        <View style={styles.box}>
        <View >
            <View style={styles.flexRow}>
            <View style={styles.rectangle}>
                <View style={styles.smallRectangle}>
                <FontAwesome  name="map-marker" size={30} color="white" />

                
                </View>
                <Text style={styles.textinside}>العنوان علي الخرائط</Text>


            </View>

            <View style={styles.rectangle}>
                <View style={styles.smallRectangle}>
                <AntDesign  name="phone" size={30} color="white" />

                </View>
                <Text style={styles.textinside}>  01001186472</Text>


            </View>
            </View>
            

            <View style={styles.flexRow}>
            <View style={styles.rectangle}>
                <View style={styles.smallRectangle}>
                <FontAwesome  name="map-marker" size={30} color="white" />

                </View>
                <Text style={styles.textinside}>  القاهره - مصر</Text>


            </View>

            <View style={styles.rectangle}>
                <View style={styles.smallRectangle}>
                <AntDesign  name="mail" size={30} color="white" />

                </View>
                <Text style={styles.textinside}>  email@gmail.com</Text>


            </View>
            </View>
           
        </View>
        <View style={styles.EMAIL}>
                <Text style={styles.textemail}>www.fhgfhgf.com</Text>
            </View>
        </View>
        

    </Animated.View>
    </PanGestureHandler>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'green',
      },
      flexRow:{
        display:"flex", 
         justifyContent:"space-around", 
          alignItems:"center",
          flexDirection:"row",
          margin:20,
          marginTop:50
         
      },
      box:{
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
      },
      EMAIL:{
        width:"80%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#4750E4",height:70,borderRadius:30
      },
      textemail:{
        color:"white",
        fontFamily:"Cairo-Bold",
        fontSize:20
      },

      rectangle: {
        width: '45%',
        height: 150,
        backgroundColor: COLORS.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: -1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#fff',
        borderRadius:20
      },
      smallRectangle: {
        width: 50,
        height: 50,
        backgroundColor: '#81AF1C',
        position: 'absolute',
        top: -10,
        right: -10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10

      },
      textinside:{
        color:"white",
        fontFamily:"Cairo-Bold",

      },
      phoneIcon: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'FontAwesome',
      },
      text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"green"
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
export default ContactUs