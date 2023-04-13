import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button,Text ,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewAccountScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [color, setcolor] = useState(false);
  const [backcolor, setbackcolor] = useState(false);


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

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
  };

  return (
  
  <View style={{flex:1,position:"relative",zIndex:-1,backgroundColor:"#80AB33"}}>
    <View style={{backgroundColor:"#80AB33",height:"20%",width:"100%"}}>

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
               
       <Ionicons style={{backgroundColor:backcolor === true ? "white":"#80AB33",padding:20,borderRadius:50,margin:20}} name="woman" size={40} color="#E6257A" />
       </TouchableOpacity> 
       <Text style={styles.text}>انثي</Text>

        </View>

       </View>
   </View>
    
     <View style={styles.buttonContainer}>
     <TouchableOpacity onPress={handelBackColorwoman}  >
       <Text style={{paddingHorizontal:80,paddingVertical:15,backgroundColor:"#80AB33",borderRadius:30,color:"white",fontFamily:"bold"}}>الــتــالــــــــــي</Text>
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
