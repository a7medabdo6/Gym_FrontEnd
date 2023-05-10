import { View, Text,StyleSheet ,TouchableOpacity, Alert, Modal, Pressable,Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SettingCard from '../component/SettingCard';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import React, { useCallback, useState } from 'react'

import SideBar from '../component/SideBar';
import TopMenu from '../component/TopMenu';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;

const Setting = () => {
  const navigation = useNavigation();
  const {t,i18n}=useTranslation()
  const [modalVisible, setModalVisible] = useState(false);
const Hnadelshow =()=>{
  setModalVisible(!modalVisible)
}

const choseenglish =()=>{
  i18n.changeLanguage("en")
  setModalVisible(!modalVisible)
}

const choseArabic =()=>{
  i18n.changeLanguage("ar")
  setModalVisible(!modalVisible)
}





const translateX = useSharedValue(0);

const drawerProgress = useDrawerProgress()

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

    <Animated.View style={[styles.page,rStyle]}>
    <TopMenu navigation={navigation} noti={true} ava={false} name={false} onPress={onPress}/>

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity onPress={choseenglish}>  

            <Text style={styles.modalText}>English</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={choseArabic}>  

<Text style={styles.modalText}>عربي</Text>
</TouchableOpacity> 

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
    </View>
      <SettingCard icon={<Ionicons  name="key" size={30} color="grey" />} text="Account" title="Security notification, change number" />

      <SettingCard icon={<Ionicons  name="lock-closed" size={30} color="grey" />} text="Privacy" title="Security notification, change number" />
      <SettingCard icon={<MaterialIcons  name="support-agent" size={30} color="grey" />} text="technical support" title="Security notification, change number" />
      <TouchableOpacity onPress={Hnadelshow}>  

      <SettingCard icon={<AntDesign  name="earth" size={30} color="grey" />} text={t("App Language")} title="Security notification, change number" />
      </TouchableOpacity> 

      <SettingCard icon={<FontAwesome5  name="user-friends" size={30} color="grey" />} text="Anvite" title="Security notification, change number" />
     

      <SettingCard icon={<FontAwesome5  name="hands-helping" size={30} color="grey" />}  text={t("Help")} title="Security notification, change number" />
     


      <SettingCard icon={<AntDesign  name="logout" size={30} color="grey" />} text="Sign out" title="Security notification, change number" />
      <SettingCard icon={<AntDesign  name="delete" size={30} color="grey" />} text="Delet account" title="Security notification, change number" />

 

     
    </Animated.View>
    </PanGestureHandler>

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position:"absolute",
    top:80,
    width:"100%",
    paddingTop:150,
    height:"100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex:1

    
  },
  box1:{
   display:"flex",
   justifyContent:"space-around",
   alignItems:"center",
   flexDirection:"row",
   marginBottom:"2%"
},
  icon: {
  
    
  },
  text:{
    fontSize:18,
    color:"black"
  },
  page:{
    flex:1,
    
    backgroundColor: 'white',
  },
 
  title:{
    fontSize:12,
    fontFamily:"400",
    color:"grey"
  },
  image:{
    height:35,
    width:40,
    color:"white"
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
  pagestyle:{flex:1,backgroundColor:"#cccccc",flexDirection:"row"}


});
export default Setting