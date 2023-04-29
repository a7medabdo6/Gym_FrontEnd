import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button,Text ,TouchableOpacity,Alert, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Ulits/COLORS';
import { SignInApi } from '../server/Hook/Auth/signIn-Hook';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';

const ForgetPass = () => {
    const navigation = useNavigation();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValidEmail(true); // Reset email validation state on each change
      };
      const handleEmailSubmit = () => {
    // Email validation using regular expression
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);

    if (isValid) {
      // Email is valid, submit the form or perform the desired action
    } else {
      // Email is invalid, show an error message
      Alert.alert('Error', 'Please enter a valid email address');
    }

    const MIN_LENGTH = 8;
    const MAX_LENGTH = 20;
    const VALID_CHARACTERS = /^[a-zA-Z0-9!@#$%^&*]+$/;

   
if(isValid ){
    navigation.navigate('Verificationcode')
}
    
  };
  return (
    <View style={styles.container}>

    <View style={styles.logo}>
    <Image 
                 source={require('../../assets/images/logo_without.png')}
                 style={styles.dumbel}
              />  
    </View>
         
        
  <Text style={{color:"black",fontWeight:"100",fontSize:17,marginBottom:30,textAlign:"center",width:"80%"}}>Ops you forgot your password
    Lets get you back on Track!</Text>
    <Text style={{color:"black",fontWeight:"300",fontSize:22,marginBottom:30,textAlign:"center"}}>Forget password
   </Text>
  <View style={styles.inputContainer}>
          <Entypo name="mail" size={24} color="grey" style={styles.icon} />
          <TextInput
            style={[styles.input, !isEmailValid && styles.invalidInput]}
            placeholder="example@gmail.com"
            placeholderTextColor="#7C9E3D"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
     
        {!isEmailValid && <Text style={styles.error}>Please enter a valid email address</Text>}
       
     <View>
        
     </View>
     <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
     {!isValidEmail && (
          <Text style={styles.error}>Please enter a valid email address</Text>
        )}
      
     </View>
  
 
       
       <TouchableOpacity onPress={handleEmailSubmit}  >
        <View style={styles.buttonContainer} >
        <Text style={{paddingHorizontal:70,paddingVertical:20,backgroundColor:"#7B9D3C",borderRadius:48,color:"white",fontFamily:"bold",textAlign:"center"}}>Send</Text>
  
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
  width:"60%",
    flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:"10%"
    },
    iconsocial:{
      width:50,
      height:50
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

export default ForgetPass