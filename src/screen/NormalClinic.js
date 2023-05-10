import { View, Text, StyleSheet,Dimensions } from 'react-native'
import CardDetailsNormalClinic from '../component/CardDetailsNormalClinic'
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
const NormalClinic = ({ route, navigation }) => {
  const { itemId } = route.params;
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
      <CardDetailsNormalClinic itemId={itemId} />
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
  pagestyle:{flex:1,backgroundColor:"#CCCCCC",flexDirection:"row"}
});
export default NormalClinic