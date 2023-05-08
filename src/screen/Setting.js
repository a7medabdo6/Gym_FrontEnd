import { View, Text,StyleSheet ,TouchableOpacity, Alert, Modal, Pressable} from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SettingCard from '../component/SettingCard';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

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
  return (
    <View style={{flex:1,marginLeft:"3%",marginTop:"5%"}}>
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
    height:"91%",
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

});
export default Setting