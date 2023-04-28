import { View, Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const TopMenu = ({navigation}) => {
    const [token,settoken]=useState("")
    const [username,setusername]=useState("")
  
    async function printToken() {
      try {
        // قراءة قيمة الـ "Token" من Local Storage
        const token = await AsyncStorage.getItem('Token');
        const username = await AsyncStorage.getItem('username');
  
        if(token)
        settoken(token)
  
        if(username)
        setusername(username)
  
      } catch (error) {
        console.log('حدث خطأ في قراءة البيانات:', error);
      }
    }
    console.log('Token8888:', token);
    console.log('dataaaa:', username);
  
  
    // استدعاء الدالة لطباعة قيمة الـ "Token"
    printToken();

  return (
    <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",alignItems:"center",marginHorizontal:20}}>
    <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"center",alignItems:"center"}}>
    <Image 
       source={require('../../assets/images/notification.png')}
       style={styles.image}
    />
<Image 
       source={require('../../assets/images/profile-green.png')}
       style={[styles.image,{marginHorizontal:15  }]}
    />        
<Text style={styles.text} > {username} </Text>
    </View>

    <View >
      <TouchableOpacity onPress={()=> navigation.openDrawer()}>
      <Image 
       source={require('../../assets/images/menu-green.png')}
       style={styles.image}
    />
      </TouchableOpacity>


</View>

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
    image:{
      height:35,
      width:40,
      color:"white"
  },
    input: {
      height: 50,
      backgroundColor: '#fff',
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor:"black",
      borderBottomWidth:1
      
    },
    text:{
      fontSize:12,
      fontFamily:"Cairo-Bold",
      color:"#8cb63f",
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
  });

export default TopMenu