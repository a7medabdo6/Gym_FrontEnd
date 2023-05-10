import { View, Text,StyleSheet ,TouchableOpacity, Alert, Modal, Pressable,Dimensions,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import { COLORS } from '../Ulits/COLORS';
import Button from "../Ulits/Button"
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import {  PostRateApi } from '../server/Hook/Rate/Post-Rate-Hook';
import { useSelector } from 'react-redux';
const BodyAboutNormalClinic = ({item}) => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
console.log(rating);
  const [modalVisible, setModalVisible] = useState(false);
  const Hnadelshow =()=>{
    setModalVisible(!modalVisible)
  }

  const HnadelClose =()=>{
    setModalVisible(!modalVisible)
  }
  const {mutate:SubmitPostRate,isError,error,data} =  PostRateApi(data)
  const {PostRateData} = useSelector(state => state.PostRateRedux)




  const handelPost=()=>{
    const data ={
      "busines": 9,
      "rate":rating.toString(),
      "review": "2"
    }
    SubmitPostRate(data)

  }

  // useEffect(()=>{
  //   if(PostRateData){
  //     HnadelClose()

  //   }
  // },[PostRateData])

  return (
    <View style={styles.container}>
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
          <StarRating
        rating={rating}
        onChange={setRating}
      />
<Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handelPost()}>
              <Text style={styles.textStyle}>Rate</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
    </View>
      <View>
            <Image 
               source={require('../../assets/images/undraw.png')}
               style={styles.image}
            />
            </View>
            <Text style={styles.text}> {item?.name}</Text>
            <Text style={styles.title}>تاسست عياده x في عام 1992 علي يد اكبر الاطباء خبره وهي مختصه فالصحه والتغذيه السليمه</Text>
            <Button text="منتجاتنا" bckColor={COLORS.mainColor}/>
            <TouchableOpacity     onPress={() => navigation.navigate('ContactUs')}>
            <Button text="تواصل معنا" bckColor={COLORS.mainColor}/>
            </TouchableOpacity>
            
            <TouchableOpacity     onPress={() => navigation.navigate('Todaydrills')}>
            <Button text="التدريبات اليوميه" bckColor={COLORS.mainColor}/>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.marginBot}    onPress={() => Hnadelshow()}>

  <Button text="قيم هذا المكان" bckColor={COLORS.mainColor}/>
  </TouchableOpacity>


    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     marginBottom:"20%"
  
    },
    marginBot:{
      marginBottom:"10%"
    },
    image:{
        height:300,
        width:300
    },
    body:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
        
    },
    title:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"grey",
        textAlign:"center",
        marginTop:20,
        marginHorizontal:20
    },
  
    text:{
      fontSize:25,
      fontFamily:"Cairo-Bold",
      color:"grey"
    },
    buttonContainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      height:60,
      width:250,
      backgroundColor:COLORS.mainColor,
      color:"white",
      borderRadius:50,
      marginTop:30
    },
    buttonText:{
        color:"white",
        fontSize:20,
        fontFamily:"bold",
        fontFamily:"Cairo-Bold",

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
        marginTop:10
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
export default BodyAboutNormalClinic