import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button,Text ,TouchableOpacity,Alert, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Ulits/COLORS';
import { SignInApi } from '../server/Hook/Auth/signIn-Hook';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';



const NewPass = () => {
    const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Newpassword, setNewpassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [color, setcolor] = useState(false);
  const [backcolor, setbackcolor] = useState(false);


  


  const handlePasswordChange = (text) => {
    setPassword(text);
  };

const handlePasswordChangeNewpassword =(text)=>{
    setNewpassword(text)
}

  const {isLoading,mutate:SubmitSignIn,isError,error,data} =  SignInApi()
  const {SignInData} = useSelector(state => state.SignInRedux)

  async function setToken(token,username) {
    try {
      // ضبط قيمة الـ "Token" في Local Storage
      await AsyncStorage.setItem('Token', token);
      await AsyncStorage.setItem('username', username);

      console.log('تم ضبط قيمة الـ "TokenN" بنجاح:', token);
      console.log('تم ضبط قيمة الـ "dataaaaa" بنجاح:', username);

    } catch (error) {
      console.log('ooooooooo', error);
    }
  }

  // استدعاء الدالة لضبط قيمة الـ "Token"
  useEffect(()=>{
    if(SignInData){
      let token = SignInData?.Token
      let username = SignInData?.username

      setToken(token,username);
    }
  },[SignInData])
  
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(true); // Reset email validation state on each change
  };
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
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

    if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
      setIsValidPassword(false);
      Alert.alert(
        'Error',
        `Password must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`
      );
    } else if (!VALID_CHARACTERS.test(password)) {
      setIsValidPassword(false);
      Alert.alert(
        'Error',
        'Password can only contain letters, numbers, and special characters: !@#$%^&*'
      );
    } else {
      // Password is valid, submit the form or perform the desired action
    }
if(isValid ){

}
    
  };




//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setIsValidPassword(true); // Reset password validation state on each change
//   };

  const handlePasswordSubmit = () => {
    // Password validation rules
    const MIN_LENGTH = 4;
    const MAX_LENGTH = 20;
    const VALID_CHARACTERS = /^[a-zA-Z0-9!@#$%^&*]+$/;

    if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
      setIsValidPassword(false);
      Alert.alert(
        'Error',
        `Password must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`
      );
    } else if (!VALID_CHARACTERS.test(password)) {
      setIsValidPassword(false);
     
    } else {
      // Password is valid, submit the form or perform the desired action
      Alert.alert('Success', 'Password is valid');
    }
  };

  
const handleSubmit = async event => {
  event.preventDefault();
  // dispatch(login());
  let data = {
    "email": email,
    "password": password
  }

SubmitSignIn(data)

};

useEffect(()=>{
    if (SignInData) {
        // Navigate to a specific page
        navigation.navigate('MyTabs');
      } 
},[SignInData])
  return (
  
   
<View style={styles.container}>

  <View style={styles.logo}>
  <Image 
               source={require('../../assets/images/logo_without.png')}
               style={styles.dumbel}
            />  
  </View>
       
      
<Text style={{color:"black",fontWeight:"900",fontSize:25,marginVertical:"10%",width:"90%"}}>Enter your new password</Text>

<View style={styles.inputContainer}>
        <Entypo name="lock" size={24} color="grey" style={styles.icon} />
        <TextInput
          style={[styles.input, !isPasswordValid && styles.invalidInput]}
          placeholder="Password"
          placeholderTextColor="#7C9E3D"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={handleToggleShowPassword}>
          <Entypo name={showPassword ? "eye-with-line" : "eye"} size={24} color="grey" style={styles.icon} />
        </TouchableOpacity>
      </View>
   
      <View style={styles.inputContainer}>
        <Entypo name="lock" size={24} color="grey" style={styles.icon} />
        <TextInput
          style={[styles.input, !isPasswordValid && styles.invalidInput]}
          placeholder="Re-enter Password"
          placeholderTextColor="#7C9E3D"
          value={Newpassword}
          onChangeText={handlePasswordChangeNewpassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={handleToggleShowPassword}>
          <Entypo name={showPassword ? "eye-with-line" : "eye"} size={24} color="grey" style={styles.icon} />
        </TouchableOpacity>
      </View>
      {!isPasswordValid && <Text style={styles.error}>Please enter a password</Text>}
   <View>
      
   </View>
   <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
   {!isValidEmail && (
        <Text style={styles.error}>Please enter a valid email address</Text>
      )}
       {!isValidPassword && (
        <Text style={styles.error}>
          Password must be between 8 and 20 characters and can only contain letters, numbers, and special characters: !@#$%^&*
        </Text>
      )}
   </View>

   
     
     <TouchableOpacity onPress={handleEmailSubmit}  >
      <View style={styles.buttonContainer} >
      <Text style={{paddingHorizontal:70,paddingVertical:20,backgroundColor:"#7B9D3C",borderRadius:48,color:"white",fontFamily:"bold",textAlign:"center"}}>Next</Text>

      </View>
       </TouchableOpacity> 
      
   </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:"center",
    paddingHorizontal: 20,
    marginTop:"10%"
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
    marginVertical:"10%"
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

export default NewPass