import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { FontName } from '../Ulits/FontName';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Info = ({ navigation }) => {
  return (
    <View style={styles.page}>
   
   <LinearGradient
    colors={['#8cb63f', '#79A52C', '#98C14B']}
    style={styles.page}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <View style={{ flex: 1 }}>
    <View style={{marginLeft:10,marginTop:20}}>
    <Image 
               source={require('../../assets/images/menu.png')}
               style={styles.image}
            />

      </View>
      <View style={styles.line2}></View>
    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

   
    <Image 
               source={require('../../assets/images/logo_without.png')}
               style={styles.dumbel}
            />
                  <Text style={styles.textTop}>Nutri GYM</Text>
      


    </View>
    <View style={{width:"100%",display:"flex",flexDirection:"row-reverse",}}>
    <View style={styles.line1}></View>

    </View>

    <View>
        <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-start"}}>
        <View style={styles.circle}></View>
        <Text style={styles.text}> نوفر لك في التطبيق مميزات هائله يمكنك الاستفاده منها من خلال العروض المقدمه والخصومات المميزه</Text>

        </View>

        <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-start",marginTop:50}}>
        <View style={styles.circle}></View>
        <Text style={styles.text}> نوفر لك في التطبيق مميزات هائله يمكنك الاستفاده منها من خلال العروض المقدمه والخصومات المميزه</Text>

        </View>
    </View>
    <View style={{display:"flex",flexDirection:"row-reverse",justifyContent:"space-around",alignItems:"center",marginVertical:"30%"}}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>المزيد من المعلومات</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonafter} onPress={() => navigation.navigate('WelcomeScreen')}>
        <Text style={styles.buttonText}>تخطي</Text>
      </TouchableOpacity>
    </View>
    </View>


    </LinearGradient>
    
    </View>

 

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:"80%"
  },
  circle:{width:25,height:25,backgroundColor:"white",borderRadius:50,marginHorizontal:20},
  textTop: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  image:{
    height:50,
    width:50,
    color:"white"
},
dumbel:{
  height:150,
  width:150,
},
  line1:{backgroundColor:"white",width:"50%",height:7,marginVertical:"5%",left:0},
  line2:{backgroundColor:"white",width:"50%",height:7,marginVertical:"5%"},
  text: {
    fontSize: 15,
    fontFamily: "Cairo-Bold",
    color: 'white',
    width:"80%"
  
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 15,
    marginHorizontal: 10,
  },
  buttonafter: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 15,
    marginHorizontal: 10,
    width:130,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText: {
    fontSize: 15,
    color: 'green',
    fontFamily: "Cairo-Regular",

  },
  page:{
    flex:1,
    height:"100%" ,
   }
});

export default Info;
