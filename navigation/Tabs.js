import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/screen/Home';
import Info from '../src/screen/Info';
import NewAccountScreen from '../src/screen/NewAccountScreen';
import Gym from '../src/screen/Gym';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../src/screen/WelcomeScreen';
import { COLORS } from '../src/Ulits/COLORS';
import FavStack from './FavStack';
import Calender from '../src/screen/Calender';
import Profile from '../src/screen/Profile';

import Today from '../src/screen/Today';
import {Image,StyleSheet}from "react-native"

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator

    screenOptions={{
      headerShown: false,

        tabBarShowLabel: false,

        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        tabBarStyle: {
            position:"absolute",
            // bottom:25,
            // left:20,
            // right:20,
            elevation:0,
            backgroundColor:COLORS.mainColor,
            borderBottomLeftRadius:0,
            borderBottomRightRadius:0,
            // borderRadius:15,
            height:"10%"
        },
        tabStyle: {
        //   paddingVertical: 10,
        },
        labelStyle: {
        //   fontSize: 16,
        //   fontWeight: 'bold',
        },
      }}

    >
      <Tab.Screen name="Fav" component={FavStack} 
       options={{
        tabBarIcon: ({ focused, color, size }) => (
          <AntDesign name='heart' size={40} color={focused ? 'grey' : 'white'} />
        ),
    }} />
   
      

      <Tab.Screen name="Today" component={Today} 
       options={{
        tabBarIcon: ({ focused, color, size }) => (
          focused ? <Image 
            source={require('../assets/images/dumbbellgrey.png')}
            style={{ width: 50, height: 50 }}

         />  : <Image 
            source={require('../assets/images/dumbel-small.png')}
            style={{ width: 50, height: 50 }}

         /> 
          
       
            ),
      }} />
      
 
      
<Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused, color, size }) => (
          
            focused ? <Image 
            source={require('../assets/images/profilegrey.png')}
            style={{ width: 50, height: 50 }}

         />  : <Image 
            source={require('../assets/images/profile.png')}
            style={{ width: 50, height: 50 }}

         /> 
          
     
                        ),
      }} />
<Tab.Screen name="calender" component={Calender} options={{
        tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="calendar" size={40} color={focused ? 'grey' : 'white'} />
            ),
      }} />

<Tab.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="settings" size={40} color={focused ? 'grey' : 'white'} />
            ),
      }} />
      

    </Tab.Navigator>
  );
}



export default MyTabs