import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'


const TopMenu = () => {
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
<Text style={styles.text} >اسم المستخدم</Text>
    </View>

    <View >
<Image 
       source={require('../../assets/images/menu-green.png')}
       style={styles.image}
    />

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