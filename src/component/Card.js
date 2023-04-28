import { View, Text,StyleSheet,ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


const Card = ({titletext,text,imageSource}) => {
  return (
    <ScrollView style={styles.container}>
    <ImageBackground
    
      source={{ uri: imageSource }}
      style={styles.imageBackground}
    >
<View style={styles.gradient}>
    <LinearGradient
    style={{ height:150, opacity: 0.7,borderRadius:10,flex:1}}
    colors={['#8cb63f', 'transparent']}
    // colors={['#9DC15B', 'white','rgba(0, 0, 0, 0)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
   
  >
        
        </LinearGradient>
        </View>
      </ImageBackground>
      <View style={{width:"90%",marginHorizontal:20}}>
            <Text style={styles.titletext}>{titletext} </Text>
            <Text style={styles.text}>{text} </Text>


        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
         position:"relative",
         borderRadius:20,
         marginBottom:0
  
      
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
    titletext:{
      fontSize:20,
      fontFamily:"Cairo-Bold",
      color:"white",
      // textShadowColor: 'rgba(0, 0, 0, 0.5)',
      //  textShadowOffset: { width: 2, height: 5 },
      //   textShadowRadius: 2 ,
        position:"absolute",
        top:-120,
        right:"2%",

    },
    text:{
        marginTop:3,
        fontSize:12,
        fontFamily:"Cairo-Regular",
        color:"white",
        // textShadowColor: 'rgba(0, 0, 0, 0.5)',
        // textShadowOffset: { width: 2, height: 5 },
        //  textShadowRadius: 2 ,
         position:"absolute",
         top:-80,
         right:"2%",
         marginHorizontal:10
      },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
     imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height:125,
    marginTop:"4%",
    marginHorizontal:20,
    borderRadius: 10, // set the border radius to 20
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // change this color to adjust the gradient
  },
  });
export default Card