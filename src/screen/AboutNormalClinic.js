import { View, Text ,StyleSheet,Image,ScrollView} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutClinic from '../component/BodyAboutClinic';
import BodyAboutNormalClinic from '../component/BodyAboutNormalClinic';

const AboutNormalClinic = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
        <Image 
               source={require('../../assets/images/menu-green.png')}
               style={styles.image}
            />       
             <Image 
               source={require('../../assets/images/notification.png')}
               style={styles.image}
            /> 

        </View>

        <View style={styles.body}>
            <BodyAboutNormalClinic/>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
     marginBottom:"20%"
  
    },
    image:{
      height:35,
      width:40,
      color:"white"
  },

   
    header:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        margin:"4%"
    },
    body:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
        
    },
  
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"green"
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
  });


export default AboutNormalClinic