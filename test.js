import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, ImageBackground,Text } from 'react-native';
import Card from './src/component/Card';

const BackgroundBox = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/gym.jpg')}
        style={styles.imageBackground}
      >
<View style={styles.gradient}>
<LinearGradient
    style={{marginTop:20,borderRadius:10,marginHorizontal:10, opacity: 0.5,}}
    colors={['#9DC15B', 'white']}
    start={{ x: 1, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
        <View style={{width:"90%",height:150,marginHorizontal:20}}>
            <Text style={styles.titletext}>"dsgfdg" </Text>
            <Text style={styles.text}>"sdggfd" </Text>


        </View>
        </LinearGradient>
</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:150
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height:150
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // change this color to adjust the gradient
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
});

export default BackgroundBox;
