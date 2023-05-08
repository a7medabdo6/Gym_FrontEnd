
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Info from '../src/screen/Info';
import NewAccountScreen from '../src/screen/NewAccountScreen';
import Home from '../src/screen/Home';
import Gym from '../src/screen/Gym';
import CardInfoGym from '../src/component/CardInfoGym';
import AboutGYM from '../src/screen/AboutGYM';
import AboutClinic from '../src/screen/AboutClinic';

import clinic from '../src/screen/Clinic';
import CardInfoClinic from '../src/component/CardInfoClinic';
import ScheduledExercises from "../src/screen/ScheduledExercises"
import NormalClinic from '../src/screen/NormalClinic';
import CardInfoNoramlClinic from '../src/component/CardInfoNoramlClinic';
import AboutNormalClinic from '../src/screen/AboutNormalClinic';
import Todaydrills from '../src/screen/Todaydrills';
import ContactUs from '../src/screen/ContactUs';
import Stores from '../src/screen/Stores';
import CardInfoStores from '../src/component/CardInfoStores';
import AboutStores from '../src/screen/AboutStores';
import MySubscriptions from '../src/screen/MySubscriptions';
import Wlc from '../src/screen/Wlc';
import ForgetPass from '../src/screen/ForgetPass';
import Verificationcode from '../src/screen/Verificationcode';
import NewPass from '../src/screen/NewPass';
import Login from '../src/screen/Login';
import CardInfoResturant from '../src/component/CardInfoResturant';
import BodyAboutResturant from '../src/component/BodyAboutResturant';
import Resturant from '../src/screen/Resturant';


const Stack = createStackNavigator();

function FavStack() {
  return (
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
                {/* <Stack.Screen name="Enter" component={Info}  /> */}

        {/* <Stack.Screen name="NewAccountScreen" component={NewAccountScreen}  /> */}
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Gym" component={Gym}  />
        <Stack.Screen name="Clinic" component={clinic}  />
        <Stack.Screen name="NormalClinic" component={NormalClinic}  />
        <Stack.Screen name="Stores" component={Stores}  />
        <Stack.Screen name="Resturant" component={Resturant}  />


        
        <Stack.Screen name="CardInfoClinic" component={CardInfoClinic}  />
        <Stack.Screen name="CardInfoNoramlClinic" component={CardInfoNoramlClinic}  />
        <Stack.Screen name="CardInfoGym" component={CardInfoGym}  />
        <Stack.Screen name="CardInfoStores" component={CardInfoStores}  />
        <Stack.Screen name="CardInfoResturant" component={CardInfoResturant}  />

        
        <Stack.Screen name="AboutGYM" component={AboutGYM}  />
        <Stack.Screen name="AboutClinic" component={AboutClinic}  />
        <Stack.Screen name="AboutNormalClinic" component={AboutNormalClinic}  />
        <Stack.Screen name="AboutStores" component={AboutStores}  />
        <Stack.Screen name="BodyAboutResturant" component={BodyAboutResturant}  />

        
        <Stack.Screen name="ContactUs" component={ContactUs}  />
        <Stack.Screen name="MySubscriptions" component={MySubscriptions}  />

        

        {/* <Stack.Screen name="test" component={test}  /> */}

        

        <Stack.Screen name="ScheduledExercises" component={ScheduledExercises}  />
        <Stack.Screen name="Todaydrills" component={Todaydrills}  />

        <Stack.Screen name="wlc" component={Wlc} />
        
        <Stack.Screen
              name="NewAccountScreen"
              component={NewAccountScreen}
            />
            <Stack.Screen name="ForgetPass" component={ForgetPass} />

            <Stack.Screen
              name="Verificationcode"
              component={Verificationcode}
            />

            <Stack.Screen name="NewPass" component={NewPass} />

            <Stack.Screen name="Login" component={Login} />



      </Stack.Navigator>
  );
}



export default FavStack;