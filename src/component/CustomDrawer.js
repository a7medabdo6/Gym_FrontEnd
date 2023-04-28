import { View, Text ,StyleSheet,ScrollView,TouchableOpacity,Image, Linking} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { COLORS } from '../Ulits/COLORS';

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
 <DrawerContentScrollView {...props} contentContainerStyle={{}}>
 <View style={styles.avatar}>
            <AntDesign  name="user" size={80} color="white" />
            <View style={{position:"absolute",bottom:0,right:0}}>
            <AntDesign   name="camerao" size={40} color="white" />

            </View>


            
            </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
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
    image:{
      height:35,
      width:40,
      color:"white"
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
      fontSize:17,
      fontFamily:"Cairo-Bold",
      color:"grey"
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

export default CustomDrawer