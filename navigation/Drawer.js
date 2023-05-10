import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} scrollEnabled={false} gestureEnabled={false}>
        <DrawerItem
          label="Home"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="About"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('About')}
        />
        <DrawerItem
          label="Settings"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('Settings')}
        />
      </DrawerContentScrollView>
    );
  };
     

export default DrawerContent