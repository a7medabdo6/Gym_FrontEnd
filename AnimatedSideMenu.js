import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity,Text } from 'react-native';

const AnimatedSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideIn = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-250, 0],
        }),
      },
    ],
  };

  const slideOut = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -250],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sideMenu, isOpen ? slideIn : slideOut]}>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text>Menu Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text>Menu Item 3</Text>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={toggleMenu}>
        <Text>{isOpen ? 'Close' : 'Open'} Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 250,
    backgroundColor: 'white',
    zIndex: 1,
    paddingTop: 50,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8ac53d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedSideMenu;