import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutClinic from '../component/BodyAboutClinic';
import BodyAboutNormalClinic from '../component/BodyAboutNormalClinic';
import { COLORS } from '../Ulits/COLORS';
import { useNavigation } from '@react-navigation/native';

const MySubscriptions = () => {
  return (
    <View>
      <View style={styles.header}>
        <AntDesign  name="menufold" size={30} color="green" />
        <MaterialCommunityIcons  name="bell-alert-outline" size={30} color="green" />

        </View>
<View style={styles.body}>
<View style={styles.avatar}>
            <AntDesign  name="user" size={100} color="white" />

            </View>
            <Text style={styles.text}> محمد كريم</Text>
            <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />

<Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />


<Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />

<Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Screenshot_8.png')}
      />
            <View >
      

      
    </View>

</View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        flexDirection: 'row',
        position: 'relative',
        backgroundColor:"red",
        transform: [ {skewY: '10deg'}],
      },
      tinyLogo:{
        width:"100%",
        height:50,
        marginVertical:20
      },
      trapezoid: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 50,
        borderColor: 'transparent',
        position: 'absolute',
      },
      left: {
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 100,
        borderColor: 'transparent transparent transparent blue',
        left: 0,
        top: 0,
      },
      right: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 100,
        borderColor: 'transparent blue transparent transparent',
        right: 0,
        bottom: 0,
      },
      rectangle: {
        position: 'absolute',
        top: 0,
        left: 50,
        width: 100,
        height: 100,
        backgroundColor: 'red',
        transform: [{ skewX: '-45deg' }],
      },
    border:{
        width:"100%",
        borderWidth:1,
borderColor:"grey",
borderRadius:5,
height:50,
display:"flex",
justifyContent:"center",
alignItems:"flex-end",
marginVertical:5

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
        alignItems:"center",
        margin:"4%"
    },
    avatar:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:COLORS.mainColor,
      width:150,
      height:150,
      borderRadius:100
        
    },
  
    text:{
      fontSize:20,
      fontFamily:"Cairo-Bold",
      color:"green",
      marginVertical:10
    },
    text1:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"grey",
        marginRight:20
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
  });

export default MySubscriptions