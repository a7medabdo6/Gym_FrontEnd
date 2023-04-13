import { View, Text,ScrollView,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../Ulits/COLORS';
import { useNavigation } from '@react-navigation/native';

const MiniCard = ({title,text,adress}) => {
   

  return (
    <ScrollView style={styles.container}>
        
        <View style={{margin:5}} >
        <View style={styles.box1}>
        <Text style={styles.textbold}> {title} </Text>
        <View style={styles.rate}>
        <Entypo  name="star" size={20} color="#FBB03B" />
        <Text style={styles.numtxt} >(3.8)</Text>

        </View>
     </View>   

     <Text style={styles.texttitle}>{text}</Text>

     <View style={styles.box3} >
        <View style={styles.box2}>
        <Text style={styles.text}>  {adress} </Text>
        <Entypo  name="location-pin" size={30} color={COLORS.mainColor} />

        </View>
    <View style={styles.sale}>
        <Text style={styles.textsale}>عروض خاصه</Text>
    </View>
     </View>
        </View>
     
       


 </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      borderWidth:1,   
      position:"relative",
      backgroundColor: '#F4F4F4',
      // justifyContent: 'center',
      marginHorizontal:20,
      marginTop:20,
      borderRadius:10,
      marginVertical:20
      
  
      
    },
    box1:{
        flexDirection:"row-reverse",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    box2:{
        flexDirection:"row",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    box3:{
        flexDirection:"row-reverse",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:5
    },
    icon: {
     padding:5,
     backgroundColor:COLORS.mainColor,
     borderRadius:50
      
    },
    textsale:{
        fontSize:10,
        fontFamily:"Cairo-Bold",
        color:"white"
    },
    text:{
        fontSize:10,
        fontFamily:"Cairo-Bold",
        color:"black",
    },
    texttitle:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"#666666",
      marginVertical:15,
      marginRight:5

    },
    textbold:{
        fontSize:25,
        fontFamily:"Cairo-Bold",
        color:COLORS.mainColor
      },
    rate: {
        display:"flex",
      flexDirection: 'row',
      justifyContent: 'center',
      
    },
    sale:{
        position:"absolute",
        width:115,
        height:40,
        backgroundColor:"#F7931E",
        right:0,
        bottom:-5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderTopRightRadius:10,
        borderBottomLeftRadius:10



    },
    numtxt:{
      color:"grey"
    }
  });
export default MiniCard