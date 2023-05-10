import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button,Text ,TouchableOpacity,Alert, Image,ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../Ulits/COLORS';
import { SignInApi } from '../server/Hook/Auth/signIn-Hook';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';



const Login = () => {
    const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [color, setcolor] = useState(false);
  const [isLoading,setisLoading]= useState(null);

  const [TokenName, setTokenName] = useState();


  const handlePasswordChange = (text) => {
    setPassword(text.toString());
  };



  const {mutate:SubmitSignIn,isError,error,data} =  SignInApi()
  const {SignInData} = useSelector(state => state.SignInRedux)
console.log(SignInData,"77777777777777777");
  async function setToken(token,username,avatar) {
    try {
      // ضبط قيمة الـ "Token" في Local Storage
      await AsyncStorage.setItem('Token', token);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('avatar', avatar);


      console.log('تم ضبط قيمة الـ "TokenN" بنجاح:', token);
      console.log('تم ضبط قيمة الـ "dataaaaa" بنجاح:', avatar);

    } catch (error) {
      console.log('ooooooooo', error);
    }
  }

  // استدعاء الدالة لضبط قيمة الـ "Token"
  useEffect(()=>{
    if(SignInData){
      let token = SignInData?.Token
      let username = SignInData?.username
      let avatar = SignInData?.photo


      setToken(token,username,avatar);
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
    let data = {
        "email": email.toString(),
        "password": password
      }
    
    SubmitSignIn(data)

    if (SignInData) {
      setisLoading(true)
  
        // Navigate to a specific page
        // navigation.navigate('Home');
      } else{
        setisLoading(false)
      }
}
    
  };





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
  async function printToken() {
    try {
      // قراءة قيمة الـ "Token" من Local Storage
      const token = await AsyncStorage.getItem('Token');



      if (token) setTokenName(token);
      if (!token) setTokenName();

     

    } catch (error) {
      console.log('حدث خطأ في قراءة البيانات:', error);
    }
  }


  printToken();

   
},[SignInData])
useEffect(()=>{
  const token =  AsyncStorage.getItem('Token');
  // if(token === null)
  // setTokenName(null)


if(TokenName)
    navigation.navigate('Home');
  
},[TokenName])

  return (
  
   
<View style={styles.container}>

  <View style={styles.logo}>
  <Image 
               source={require('../../assets/images/logo_without.png')}
               style={styles.dumbel}
            />  
  </View>
       
      
<Text style={{color:"black",fontWeight:"900",fontSize:25,marginBottom:30}}>Sign In</Text>

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
      <Text style={{paddingHorizontal:70,paddingVertical:20,backgroundColor:"#7B9D3C",borderRadius:48,color:"white",fontFamily:"bold",textAlign:"center"}}>
      {
          isLoading === false ?(
            <ActivityIndicator size="small" color="#0000ff" />
          ):"Sign up"
        } 
      </Text>

      </View>
       </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{ navigation.navigate('ForgetPass')}}  >
       <Text style={styles.text}>Forget Password?</Text>
       </TouchableOpacity> 
      <View style={styles.line} />     
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


export default Login