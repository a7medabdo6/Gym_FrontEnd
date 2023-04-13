import { View, Text ,StyleSheet,Image,ScrollView} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutGYM from '../component/BodyAboutGYM';
import BodyAboutStores from '../component/BodyAboutStores';

const AboutStores = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
        <AntDesign  name="menufold" size={30} color="green" />
        <MaterialCommunityIcons  name="bell-alert-outline" size={30} color="green" />

        </View>

        <View style={styles.body}>
            <BodyAboutStores/>
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


export default AboutStores