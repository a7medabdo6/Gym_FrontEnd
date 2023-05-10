import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SideBar = () => {
  return (
    <View>
   <TouchableOpacity>  

<Text style={styles.modalText}>Home</Text>
</TouchableOpacity>    
<TouchableOpacity>  

<Text style={styles.modalText}>Home</Text>
</TouchableOpacity>    
<TouchableOpacity>  

<Text style={styles.modalText}>Profile</Text>
</TouchableOpacity>    
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

export default SideBar