import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Wlc = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
       
        <Image 
               source={require('../../assets/images/logo_without.png')}
               style={styles.dumbel}
            />  
<View>
<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('NewAccountScreen')}>
      <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>
    <View style={styles.rowcontainer}>
    <Text style={styles.loginText}>Already have an account? </Text>
    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
    <Text style={styles.log}>Login</Text>

    </TouchableOpacity>
    </View>
  

</View>

                    
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:"flex",
      backgroundColor: '#7B9B3C',
      justifyContent: "space-around",
      alignItems:"center"
   
  
      
    },
    rowcontainer:{
        display:"flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems:"center"
    },
    dumbel: {
        height:200,
        width:200,
        marginTop:"30%"
    },
    button: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: 'white',
        borderRadius: 48,
        paddingVertical: 10,
        paddingHorizontal: 20,
width: 261,
height: 80,
fontWeight:"700",
fontSize:"16px",
lineHeight:"19px",

// fon: normal;
// font-weight: 700;
// font: 16px;
// line-height: 19px;
/* identical to box height */


      },
      buttonText: {
        color: '#7B9D3C',
        fontSize: 16,
        fontWeight: 'bold',
      },
      loginText: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 14,
        color: 'white',
      },
      log:{
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 14,
        color: '#FFD600',
      }
  });
export default Wlc