import { View, Text ,StyleSheet,ImageBackground,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiniCard from '../component/MiniCard';
import Card from '../component/Card';
import imgsourceFood from "../../assets/images/food.jpg"
import CardExercise from "../Ulits/CardExercise"
import { COLORS } from '../Ulits/COLORS';
const ScheduledExercises = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <View style={{backgroundColor:"white",marginBottom:400}}>
     <View style={styles.header}>
        <AntDesign  name="menufold" size={30} color="green" />

        </View>
        <View style={styles.boxtop}>
        <ImageBackground source={require('../../assets/images/gym-4k.jpeg')} style={styles.backgroundImage}>
            <View style={styles.box1}>
            <Text style={styles.title}>عياده X للياقه البدنيه</Text>
            <View style={styles.info}>
              {/* <TouchableOpacity onPress={() => navigation.navigate('AboutGYM')}>
              <View style={styles.infoX} >
                    
                    <Text style={styles.text}>عن النادي</Text>
                    <AntDesign  name="infocirlceo" size={20} color="white" />

                </View>
              </TouchableOpacity> */}
                
                {/* <View  style={styles.infoX}>
                <Text style={styles.text}> تواصل معنا</Text>
                <AntDesign  name="user" size={20} color="white" />


                </View> */}

            </View>

            </View>
    </ImageBackground>
        </View>
        <View style={styles.titlebox}>
        <Text style={styles.textx}>التمارين المقرره يوميا</Text>

        </View>
        <FlatList
        data={DATA}
        renderItem={({item}) =>  <CardExercise item={item} />}      
         keyExtractor={item => item}
      />
        {/* <ScrollView style={{marginTop:20,backgroundColor:"red"}}>
            
            <CardExercise />
            <CardExercise />
            <CardExercise />

            <CardExercise />

        </ScrollView> */}
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
    titlebox:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    },
    header:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        margin:"4%"
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
    textx:{
        fontSize:20,
        fontFamily:"Cairo-Bold",
        color:"black"
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


export default ScheduledExercises