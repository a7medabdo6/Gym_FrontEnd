import { View, Text ,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BodyAboutClinic from '../component/BodyAboutClinic';
import BodyAboutNormalClinic from '../component/BodyAboutNormalClinic';
import { COLORS } from '../Ulits/COLORS';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.page}>
         <View style={styles.header}>
        <AntDesign  name="menufold" size={30} color="green" />
        <MaterialCommunityIcons  name="bell-alert-outline" size={30} color="green" />

        </View>
        <View style={styles.body}>
            <View style={styles.avatar}>
            <AntDesign  name="user" size={80} color="white" />

            </View>
            <Text>اسم المستخدم</Text>
            <View style={{backgroundColor:"#E2AC00",borderRadius:50,marginVertical:20}}>
            <AntDesign style={{padding:5}}  name="star" size={20} color="white" />


            </View>
            <ScrollView style={{width:"100%",marginBottom:"20%"}}>

            <TouchableOpacity style={styles.border} onPress={() => navigation.navigate('MySubscriptions')}>
            <View style={styles.border}>
                <Text style={styles.text1}>اشتركاتي</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.border}>
                <Text style={styles.text1}>الاشعارات والتنبيهات</Text>
            </View>

            <View style={styles.border}>
                <Text style={styles.text1}>اللغة</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.text1}>تقييم التطبيق</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.text1}>حسابي</Text>
            </View>
            <View style={[styles.border,{marginBottom:"20%"}]}>
                <Text style={styles.text1}>الاعدادات</Text>
            </View>
            </ScrollView>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
     marginBottom:"20%"
  
    },
    page:{
      flex:1,
      marginBottom:"20%"
      
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
        margin:"4%",
        marginBottom:50
    },
    
    avatar:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:COLORS.mainColor,
      width:100,
      height:100,
      borderRadius:100
        
    },
  
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"green"
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

export default Profile