import { View, Text,ScrollView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../Ulits/COLORS';


const Today = () => {
  return (
    <ScrollView style={styles.page}>
      <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginHorizontal:20,paddingVertical:20}}>
            <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
            <Entypo style={styles.icon} name="location-pin" size={30} color="white" />
            <Entypo  name="triangle-down" size={15} color="black" />

            <Text style={styles.text} >طبربور </Text>

            <Entypo style={styles.icon} name="location-pin" size={30} color="white" />
            <Entypo  name="triangle-down" size={15} color="black" />

            

        <Text style={styles.text} > منطقه السوق</Text>
            </View>

      <View>
      <AntDesign  name="menufold" size={30} color="green" />


      </View>

        </View>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <AntDesign  name="left" size={30} color="grey" />
        <Text style={styles.text1}>اليوم</Text>

        <AntDesign  name="right" size={30} color="grey" />


        </View>
        <View style={styles.container}>
        <Text style={styles.text1}>الاثنين 25/5/20235</Text>

        </View>
        <View style={styles.container}>
        <Text style={styles.text1}> مجموع السعرات الحرااريه</Text>
        <Text style={styles.text2}>   1200</Text>

        </View>

        <View style={styles.box} >
            <View style={styles.container}>
                <View style={styles.container1}>
                <Text style={styles.text1}>الخطوات</Text>
                <Text style={styles.num}>250</Text>

                </View>

                <View style={styles.container1}>
                <Text style={styles.text1}>الماء</Text>
                    <Text style={styles.num}>250</Text>
                    </View>

                    

                    <View style={styles.container1}>
                    <Text style={styles.text1}>الملاحظات</Text>
                    <Fontisto  name="onenote" size={60} color="#FEF184" />

                    </View>


            </View>
            <View style={styles.container}>
            <FontAwesome  name="heartbeat" size={200} color="#EA3D86" />
            

            </View>
            <View style={styles.container}>
                <View style={styles.container1}>
                <Text style={styles.text1}>وجبه الافطار</Text>
                <Text style={styles.num}>250</Text>

                </View>

                <View style={styles.container1}>
                <Text style={styles.text1}>وجبه الغداء</Text>
                <Text style={styles.num}>250</Text>

                </View>

                <View style={styles.container1}>
                <Text style={styles.text1}>وجبه العشاء</Text>
                <Text style={styles.num}>250</Text>

                </View>

            </View>
        </View>


    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
  
      
    },
    page:{
      flex:1,
      marginBottom:"20%"
    },
    container1: {
      
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:60,

     
         
       },
    num:{
        fontSize:20,
        color:"#4FBA5C"
    },
    box:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:20

    },
    icon: {
     padding:1,
     backgroundColor:COLORS.mainColor,
     borderRadius:50,
     marginHorizontal:5
      
    },
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"black"
    },
    text1:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"grey"
      },
      text2:{
        fontSize:20,
        fontFamily:"Cairo-Bold",
        color:COLORS.mainColor
      },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    size:{
    fontSize:"5%"
    },

  });
export default Today