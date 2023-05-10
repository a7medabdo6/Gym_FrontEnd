import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button,Text ,TouchableOpacity,Alert, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Ulits/COLORS';
import { SignInApi } from '../server/Hook/Auth/signIn-Hook';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';

const Verificationcode = () => {
    const navigation = useNavigation();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValidEmail(true); // Reset email validation state on each change
      };
      const handleEmailSubmit = () => {

    navigation.navigate('NewPass')

    
  };
  
  return (
    <View style={styles.container}>

    <View style={styles.logo}>
    <Image 
                 source={require('../../assets/images/logo_without.png')}
                 style={styles.dumbel}
              />  
    </View>
         
        
  <Text style={{color:"black",fontWeight:"100",fontSize:22,marginBottom:30,textAlign:"center",width:"70%"}}>    Please enter the  
    Verification code</Text>
    <View         style={styles.social}
>
    <Image
        style={styles.iconsocial}
        source={require('../../assets/images/dumbelverify.png')}
      />
       <Image
        style={styles.iconsocial}
        source={require('../../assets/images/dumbelverify.png')}
      />
        <Image
        style={styles.iconsocial}
        source={require('../../assets/images/dumbelverify.png')}
      />
        <Image
        style={styles.iconsocial}
        source={require('../../assets/images/dumbelverify.png')}
      />
    </View>
     
       
     <View>
        
     </View>
   
  
 
       
       <TouchableOpacity onPress={handleEmailSubmit}  >
        <View style={styles.buttonContainer} >
        <Text style={{paddingHorizontal:70,paddingVertical:20,backgroundColor:"#7B9D3C",borderRadius:48,color:"white",fontFamily:"bold",textAlign:"center"}}>Verify</Text>
  
        </View>
         </TouchableOpacity> 
        
     </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems:"center",
      marginTop:"20%",
      paddingHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    dumbel: {
      height:100,
      width:100,
  },
  logo:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  backgroundColor:"#7B9B3C",
  borderRadius:70,
  width: 120,
  height: 120,
  opacity:0.9,
  marginBottom:"20%"
  },
    input: {
      flex: 1,
      height: 50,
      fontSize: 16,
      paddingLeft: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      color: 'black',
    },
    icon: {
      marginRight: 10,
      opacity:0.4
    },
    invalidInput: {
      borderBottomColor: 'red',
    },
    error: {
      color:"red",
      textAlign:"center",
    },
    buttonContainer:{
      display:"flex",
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    
      justifyContent:"center",
      alignItems:"center",
      marginTop:"10%"
    },
    social:{
      display:"flex",
  width:"90%",
    flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:"10%"
    },
    iconsocial:{
      width:50,
      height:72
    },
    
    text: {
      fontSize: 16,
      marginTop: 20,
      marginBottom: 3,
      color:"#7C9E3D"
    },
    line: {
      borderBottomColor: '#7C9E3D',
      borderBottomWidth: 1,
      width: 150,
  
    },
    })

export default Verificationcode