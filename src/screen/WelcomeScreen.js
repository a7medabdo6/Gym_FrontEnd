import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { FontName } from '../Ulits/FontName';
const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1,height:150 }}>
 <LinearGradient
    colors={['#729E25', '#79A52C', '#98C14B']}
    style={styles.lainer}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <View style={styles.container}>
      <Text style={styles.textTop}>Hello!</Text>
      <Image 
               source={require('../../assets/images/logo_without.png')}
               style={styles.dumbel}
            />  
                <Text style={styles.textMiddle}>Nutri GYM</Text>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:100}}>
      <Text style={styles.textMiddletop}>اهلا بك في تطبيق</Text>
      <Text style={styles.textMiddle}>Nutri GYM</Text>
      

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}    onPress={() => navigation.navigate('NewAccountScreen')}>
          <Text style={styles.buttonText}>أنشاء حساب</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>تسجيل دخول</Text>
        </TouchableOpacity>
        
      </View>
    </View>

    </LinearGradient>
    </SafeAreaView>
   

  );
};

const styles = StyleSheet.create({
  lainer:{
    height:"100%",
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%"
  },
  dumbel:{
    height:150,
    width:150,
  },
  textTop: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  textMiddle: {
    fontSize: 24,
    fontFamily: "Cairo-Bold",
    color: 'white',
    marginTop: 10,
  },
  textMiddletop:{
    fontSize: 24,
    fontFamily: "Cairo-Regular",
    color: 'white',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal:30,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Cairo-Regular",
    color: 'green',
  },
});

export default WelcomeScreen;
