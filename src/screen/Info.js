import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,SafeAreaView,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { FontName } from '../Ulits/FontName';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Info = ({ navigation }) => {
  const translateX = useSharedValue(0);

  const drawerProgress = useDrawerProgress()

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      // I forgot to wrap the translationX with Math.max in the video :/
      // It must be done in order to clamp the right axis scroll
      translateX.value = Math.max(event.translationX + context.x, 0);
    },
    onEnd: () => {
      if (translateX.value <= THRESHOLD) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
        
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 4],
      [0, 3],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 4],
      [0, 15],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [
        { perspective: 100 },
        {
          translateX: translateX.value,
        },
        {
          rotateY: `-${rotate}deg`,
        },
      ],
    };
  }, []);
  const onPress = useCallback(() => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
      
    } else {
      translateX.value = withTiming(SCREEN_WIDTH / 2);
      // navigation.openDrawer()
    }
  }, []);
  return (
    <View style={styles.pagestyle}>
      <SideBar />
      <PanGestureHandler onGestureEvent={panGestureEvent} >

      <Animated.View style={[styles.container,rStyle]}> 
   
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
    
    </Animated.View>
    </PanGestureHandler>

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
   },
   
  size:{
    fontSize:"5%"
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    pagestyle:{flex:1,backgroundColor:"red",flexDirection:"row"}
});

export default Info;
