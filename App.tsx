/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewAccountScreen from './src/screen/NewAccountScreen';
import Home from './src/screen/Home';
import Info from './src/screen/Info';
import BackgroundBox from './test';
import MyComponent from './test';
import Gym from './src/screen/Gym';
import CardInfo from './src/component/CardInfoGym';
import MyTabs from './navigation/Tabs';
type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.page}>
<NavigationContainer  >
      {/* <MyTabs/> */}
      <Stack.Navigator 
      
      screenOptions={{
        headerShown: false
        
      }}>
                <Stack.Screen name="Enter" component={Info}  />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  />
        <Stack.Screen name="NewAccountScreen" component={NewAccountScreen}  />

        <Stack.Screen name="MyTabs" component={MyTabs}  />

        
        {/* <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Gym" component={Gym}  />
        <Stack.Screen name="Info" component={CardInfo}  /> */}



      </Stack.Navigator>
    </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  page:{
    flex:1,
  },
});

export default App;
