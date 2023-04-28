import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailValid(true);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(true);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginPress = () => {
    // Validate email and password
    let isValid = true;
    if (!email) {
      setIsEmailValid(false);
      isValid = false;
    }
    if (!password) {
      setIsPasswordValid(false);
      isValid = false;
    }
    if (isValid) {
      // Do something with email and password, e.g. call an API
      console.log(email, password);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Entypo name="mail" size={24} color="grey" style={styles.icon} />
        <TextInput
          style={[styles.input, !isEmailValid && styles.invalidInput]}
          placeholder="Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      {!isEmailValid && <Text style={styles.error}>Please enter a valid email address</Text>}
      <View style={styles.inputContainer}>
        <Entypo name="eye" size={24} color="grey" style={styles.icon} />
        <TextInput
          style={[styles.input, !isPasswordValid && styles.invalidInput]}
          placeholder="Password"
          placeholderTextColor="grey"
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
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  },
  invalidInput: {
    borderBottomColor: 'red',
  },
  error: {
    color:"red"}

  })


  export default Login