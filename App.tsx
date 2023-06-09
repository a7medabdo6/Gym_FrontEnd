/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import NewAccountScreen from './src/screen/NewAccountScreen';
import Home from './src/screen/Home';
import Info from './src/screen/Info';

import Gym from './src/screen/Gym';
import CardInfo from './src/component/CardInfoGym';
import MyTabs from './navigation/Tabs';
import {Provider} from 'react-redux';
import {Store} from './src/server/Store';
import {QueryClient, QueryClientProvider} from 'react-query';
import Login from './src/screen/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/screen/LoadingScreen';
import Wlc from './src/screen/Wlc';
import SplashScreen from 'react-native-splash-screen';
import CustomDrawer from './src/component/CustomDrawer';
import Profile from './src/screen/Profile';
import ForgetPass from './src/screen/ForgetPass';
import Verificationcode from './src/screen/Verificationcode';
import NewPass from './src/screen/NewPass';
import FavStack from './navigation/FavStack';
import Setting from './src/screen/Setting';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
const queryClient = new QueryClient();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {

  const {t,i18n}=useTranslation()
  // const [progress, setProgress] = useState(new Animated.Value(0));
  // const scale = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const borderRadius = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 10],
  // });
  // const animatedStyle = {borderRadius, transform: [{scale}]};
  const StackTabs = () => {
    return (
      <Stack.Navigator
        initialRouteName={
          showWelcomeScreen === true ? 'WelcomeScreen' : 'Enter'
        }
        screenOptions={{
          headerShown: false,
        }}>
                    {token ? (
          <Stack.Screen name="FavStack" component={FavStack} />
        ) : (
          // <Stack.Screen name="MyTabs" component={MyTabs} />
          <> 
            <Stack.Screen name="wlc" component={Wlc} />
            <Stack.Screen name="FavStack" component={FavStack} />

            {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
            {showWelcomeScreen === true && (
              <Stack.Screen name="Enter" component={Info} />
            )}
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
          </>
        )}


       
      </Stack.Navigator>
    );
  };

  const [token, settoken] = useState('');
  const [username, setusername] = useState('');
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('showWelcomeScreen').then(value => {
      if (!value) {
        // If not, set flag to true and store in AsyncStorage
        setShowWelcomeScreen(true);
        AsyncStorage.setItem('showWelcomeScreen', 'true');
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide(); // إخفاء شاشة البداية بعد 3 ثواني
    }, 3000);
  }, []);

  async function printToken() {
    try {
      // قراءة قيمة الـ "Token" من Local Storage
      const token = await AsyncStorage.getItem('Token');
      const username = await AsyncStorage.getItem('username');
      const lanch = await AsyncStorage.getItem('showWelcomeScreen');

      console.log('laaaaaaaaaaaa:', showWelcomeScreen);

      if (token) settoken(token);

      if (username) setusername(username);
    } catch (error) {
      console.log('حدث خطأ في قراءة البيانات:', error);
    }
  }
  console.log('Token8888:', token);
  console.log('dataaaa:', username);

  // استدعاء الدالة لطباعة قيمة الـ "Token"
  printToken();
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
  <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <View style={styles.page}>
          <NavigationContainer>
            {/* <MyTabs/> */}

            <Drawer.Navigator
              screenOptions={
                {
                  drawerType:"slide",
                  overlayColor:"transperant",
                  sceneContainerStyle: { backgroundColor: 'red' },
                  headerShown:false,
                  swipeEdgeWidth:180


                  
                }

              }
              initialRouteName="Home"
            
              drawerContent={props => <CustomDrawer {...props} />}
              >
              <Drawer.Screen
                name="Home"
                options={{headerShown: false}}
                component={StackTabs}
              />
              <Drawer.Screen
                options={{headerShown: false}}
                name="profile"
                component={Profile}
              />
               <Drawer.Screen
                options={{headerShown: false}}
                name="Setting"
                component={Setting}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    </QueryClientProvider>
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
  page: {
    flex: 1,

  },
  scentstyle:{
    // backgroundColor:"red"
  }
});

export default App;
