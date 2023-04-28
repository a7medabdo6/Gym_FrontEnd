import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Circle } from 'react-native-progress';
import * as Progress from 'react-native-progress';

const LoadingScreen = () => {
  const [rotation] = useState(new Animated.Value(0));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 1 ? 0 : prevProgress + 0.1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
    
  
      <Text style={styles.text}>جاري  تحميل البيانات</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // لون خلفية الشاشة
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#red',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});



export default LoadingScreen