import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Image,Text ,TouchableOpacity,Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Ulits/COLORS';
import { useSelector } from 'react-redux';
import { SignUpApi } from '../server/Hook/Auth/signUp-Hook';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const NewAccountScreen = () => {

  const navigation = useNavigation();

  const {isLoading,mutate:SubmitSignUp,isError,error,data} =  SignUpApi()
  const {SignUpData} = useSelector(state => state.SignUpRedux)
console.log(SignUpData);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [color, setcolor] = useState(false);
  const [backcolor, setbackcolor] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handelColor =()=>{
    setcolor(true)
    setbackcolor(flase)
  }
  const handelBackColorman =()=>{
    setcolor(false)
    setbackcolor(true)
  }
  const handelBackColorwoman =()=>{
    setcolor(false)
    setbackcolor(false)
  }
  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  // const handleEmailChange = (text) => {
  //   setEmail(text);
  // };

  // const handlePasswordChange = (text) => {
  //   setPassword(text);
  // };

  const handleCreateAccount = () => {
    // Handle create account logic here
  };
  const [isValidEmail, setIsValidEmail] = useState(true);

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

    if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
      setIsPasswordValid(false);
      Alert.alert(
        'Error',
        `Password must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`
      );
    } else if (!VALID_CHARACTERS.test(password)) {
      setIsPasswordValid(false);
      Alert.alert(
        'Error',
        'Password can only contain letters, numbers, and special characters: !@#$%^&*'
      );
    } else {
      // Password is valid, submit the form or perform the desired action
    }
    if(isValid ){
      let data = {
        "email": email,
      "password": password,
        "role": "superadmin",
     "username": username
      }
    
      SubmitSignUp(data)
  }
  };




  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(true); // Reset password validation state on each change
  };

  const handlePasswordSubmit = () => {
    // Password validation rules
    const MIN_LENGTH = 8;
    const MAX_LENGTH = 20;
    const VALID_CHARACTERS = /^[a-zA-Z0-9!@#$%^&*]+$/;

    if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
      setIsPasswordValid(false);
      Alert.alert(
        'Error',
        `Password must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`
      );
    } else if (!VALID_CHARACTERS.test(password)) {
      setIsPasswordValid(false);
      Alert.alert(
        'Error',
        'Password can only contain letters, numbers, and special characters: !@#$%^&*'
      );
    } else {
      // Password is valid, submit the form or perform the desired action
    }

  
     
  };


const handleSubmit = async event => {
  event.preventDefault();
  // dispatch(login());
  let data = {
    "email": "admin1@admin.com",
  "password": "12345678",
    "role": "superadmin",
 "username": "mohammed"
  }

  SubmitSignUp(data)

};

useEffect(()=>{
  if (SignUpData) {
      // Navigate to a specific page
      navigation.navigate('Login');
    } 
},[SignUpData])
  return (
  
    <View style={styles.container}>

    <View style={styles.logo}>
    <Image 
                 source={require('../../assets/images/logo_without.png')}
                 style={styles.dumbel}
              />  
    </View>
    <Text style={{color:"black",fontWeight:"500",fontSize:20,marginBottom:30}}> Lets Start your fitness journey!</Text>

    

  <Text style={{color:"black",fontWeight:"900",fontSize:25,marginBottom:30}}>Sign Up</Text>

  <View style={styles.inputContainer}>
          <Entypo name="user" size={24} color="grey" style={styles.icon} />
          <TextInput
            style={[styles.input, !isEmailValid && styles.invalidInput]}
            placeholder="username"
            placeholderTextColor="#7C9E3D"
            value={username}
            onChangeText={handleUsernameChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
  
  <View style={styles.inputContainer}>
          <Entypo name="mail" size={24} color="grey" style={styles.icon} />
          <TextInput
            style={[styles.input, !isEmailValid && styles.invalidInput]}
            placeholder="Email"
            placeholderTextColor="#7C9E3D"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
     
        {!isEmailValid && <Text style={styles.error}>Please enter a valid email address</Text>}
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
          <Feather name="refresh-ccw" size={24} color="grey" style={styles.icon} />
          <TextInput
            style={[styles.input, !isPasswordValid && styles.invalidInput]}
            placeholder="Re-enter Password"
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
        {!isPasswordValid && <Text style={styles.error}>Please enter a password</Text>}
        
     <View>
        
     </View>
     <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
     {!isValidEmail && (
          <Text style={styles.error}>Please enter a valid email address</Text>
        )}
         {!isPasswordValid && (
          <Text style={styles.error}>
            Password must be between 8 and 20 characters and can only contain letters, numbers, and special characters: !@#$%^&*
          </Text>
        )}
     </View>
     <Text style={{color:"#7B9D3C",fontFamily:"bold",textAlign:"center",marginVertical:10}}>or</Text>
  
      <View         style={styles.social}
  >
      <Image
          style={styles.iconsocial}
          source={require('../../assets/images/apple.png')}
        />
          <Image
          style={styles.iconsocial}
          source={require('../../assets/images/gogle.png')}
        />
          <Image
          style={styles.iconsocial}
          source={require('../../assets/images/facebook.png')}
        />
      </View>
       
       <TouchableOpacity onPress={handleEmailSubmit}  >
        <View style={styles.buttonContainer} >
        <Text style={{paddingHorizontal:70,paddingVertical:20,backgroundColor:"#7B9D3C",borderRadius:48,color:"white",fontFamily:"bold",textAlign:"center"}}>Sign in</Text>
  
        </View>
         </TouchableOpacity> 
        
     </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
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
marginBottom:"10%"
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
    marginBottom:"10%",
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  
    justifyContent:"center",
    alignItems:"center"
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

export default NewAccountScreen;
