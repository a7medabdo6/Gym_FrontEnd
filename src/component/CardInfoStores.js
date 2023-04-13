import { View, Text,ScrollView,StyleSheet, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import Card from './Card'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MiniCard from './MiniCard';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Ulits/COLORS';
import CardOfer from './CardOfer';
const CardInfoStores = ({navigation,name}) => {
  return (
    
    <View style={{flex:1,backgroundColor:"white",marginBottom:"20%"}}>
        <View style={{margin:20}}>
        <AntDesign  name="menufold" size={30} color="green" />

        </View>
       
        <View style={styles.boxtop}>
        <ImageBackground source={require('../../assets/images/gym-4k.jpeg')} style={styles.backgroundImage}>
            <View style={styles.box1}>
            <Text style={styles.title}> متجر X </Text>
            <View style={styles.info}>
              <TouchableOpacity onPress={() => navigation.navigate('AboutStores')}>
              <View style={styles.infoX} >
                    
                    <Text style={styles.text}>عن المتجر</Text>
                    <AntDesign  name="infocirlceo" size={20} color="white" />

                </View>
              </TouchableOpacity>
                
                <View  style={styles.infoX}>
                <Text style={styles.text}> تواصل معنا</Text>
                <AntDesign  name="user" size={20} color="white" />


                </View>

            </View>

            </View>
    </ImageBackground>
        </View>

        
      <ScrollView style={{marginHorizontal:20}}>
        <CardOfer text="عرض 6 شهور + خصم 20% في عياده التغذيه" title="خصم خاص عند الاشتراك لمده 6 شهور من التطبيق واحصل على 20% خصم في عياده التغذيه" bckColor="#F4F4F4" color="grey"/>
        <CardOfer text="عرض 6 شهور + خصم 20% في عياده التغذيه" title="خصم خاص عند الاشتراك لمده 6 شهور من التطبيق واحصل على 20% خصم في عياده التغذيه" bckColor="#F4F4F4" color="grey"/>
        <CardOfer text="عرض 6 شهور + خصم 20% في عياده التغذيه" title="خصم خاص عند الاشتراك لمده 6 شهور من التطبيق واحصل على 20% خصم في عياده التغذيه" bckColor="#F4F4F4" color="grey"/>
        <CardOfer text="عرض 6 شهور + خصم 20% في عياده التغذيه" title="خصم خاص عند الاشتراك لمده 6 شهور من التطبيق واحصل على 20% خصم في عياده التغذيه" bckColor="#F4F4F4" color="grey"/>
        <CardOfer text="عرض 6 شهور + خصم 20% في عياده التغذيه" title="خصم خاص عند الاشتراك لمده 6 شهور من التطبيق واحصل على 20% خصم في عياده التغذيه" bckColor="#F4F4F4" color="grey"/>
        <CardOfer text="عرض 6 شهور + خصم 20% في عياده التغذيه" title="خصم خاص عند الاشتراك لمده 6 شهور من التطبيق واحصل على 20% خصم في عياده التغذيه" bckColor="#F4F4F4" color="grey"/>

      </ScrollView>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      position:"absolute",
      paddingTop:150,
      
      
  
      
    },

   
    box1:{
        position:"relative",
        justifyContent:"space-between",
        alignItems:"center",
        height:200,
        width:"100%",
        zIndex:2
        
      
       
    },
    boxtop:{
        position:"relative",
        height:200,
        marginHorizontal:20,
        

    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:"center",
        height:200,
        position:"relative",
        borderRadius:20,
        overflow:"hidden"

        
      },
    icon: {
     padding:5,
     backgroundColor:COLORS.mainColor,
     borderRadius:50
      
    },
    title:{
        fontSize:15,
        fontFamily:"Cairo-Bold",
        color:"white",
       backgroundColor:COLORS.mainColor,
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:20,
        marginTop:5
    },
    text:{
      fontSize:15,
      fontFamily:"Cairo-Bold",
      color:"white"
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    info:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
       

},

infoX:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    fontFamily:"Cairo-Bold",
    color:"white",
   backgroundColor:COLORS.mainColor,
    paddingHorizontal:10,
    borderRadius:20,
    marginHorizontal:10,
    marginVertical:"2%"
},


  });
export default CardInfoStores