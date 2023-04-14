import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button,Text ,TouchableOpacity,Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Ulits/COLORS';
import { useSelector } from 'react-redux';
import { SignUpApi } from '../server/Hook/Auth/signUp-Hook';
import { useNavigation } from '@react-navigation/native';

const NewAccountScreen = () => {

  const navigation = useNavigation();

  const {isLoading,mutate:SubmitSignUp,isError,error,data} =  SignUpApi()
  const {SignUpData} = useSelector(state => state.SignUpRedux)
console.log(SignUpData);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [color, setcolor] = useState(false);
  const [backcolor, setbackcolor] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);


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
    setIsValidPassword(true); // Reset password validation state on each change
  };

  const handlePasswordSubmit = () => {
    // Password validation rules
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
  
  <View style={{flex:1,position:"relative",zIndex:-1,backgroundColor:"#729e25"}}>
    <View style={{backgroundColor:"#729e25",height:"20%",width:"100%"}}>

    </View>
<View style={styles.container}>
       
       <View>
        <Text style={styles.text}> الاسم</Text>
       <TextInput
       style={styles.input}
       placeholderTextColor="grey"

       placeholder="Username"
       value={username}
       onChangeText={handleUsernameChange}
     />
       </View>
    <View>
    <Text style={styles.text}>الربيد الالكتروني </Text>

    <TextInput
       style={styles.input}
       placeholderTextColor="grey"

       placeholder="Email"
       value={email}
       onChangeText={handleEmailChange}
     />
    </View>
   <View>
   <Text style={styles.text}>كلمة السر </Text>
   <TextInput
       style={styles.input}
       placeholder="Password"
       placeholderTextColor="grey"
       secureTextEntry={true}
       value={password}
       onChangeText={handlePasswordChange}
     />
   </View>
   <View>
       <View style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",marginVertical:20}}>
           <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <TouchableOpacity onPress={handelBackColorman} >
           <Ionicons style={{backgroundColor:backcolor === true ? "#80AB33":"white",padding:20,borderRadius:50,margin:20}} name="man" size={40} color="blue" />
           </TouchableOpacity>
           <Text style={styles.text}>ذكر</Text>

           </View>

           <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <TouchableOpacity onPress={handelBackColorwoman}  >
               
       <Ionicons style={{backgroundColor:backcolor === true ? "white":"#729e25",padding:20,borderRadius:50,margin:20}} name="woman" size={40} color="#E6257A" />
       </TouchableOpacity> 
       <Text style={styles.text}>انثي</Text>

        </View>

       </View>
   </View>
   <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
   {!isValidEmail && (
        <Text style={styles.errorText}>Please enter a valid email address</Text>
      )}
       {!isValidPassword && (
        <Text style={styles.errorText}>
          Password must be between 8 and 20 characters and can only contain letters, numbers, and special characters: !@#$%^&*
        </Text>
      )}
   </View>
   
    
     <View style={styles.buttonContainer}>
     <TouchableOpacity onPress={handleEmailSubmit}  >
       <Text style={{paddingHorizontal:80,paddingVertical:15,backgroundColor:COLORS.mainColor,borderRadius:30,color:"white",fontFamily:"bold"}}>الــتــالــــــــــي</Text>
       </TouchableOpacity> 
     </View>
   </View>
  </View>
    
  );
};

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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign:"center"
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
    fontSize:15,
    color:"black",
    fontFamily:"Cairo-Bold"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom:"20%"
  },
});

export default NewAccountScreen;
