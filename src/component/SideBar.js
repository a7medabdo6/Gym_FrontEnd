import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SideBar = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const navigation = useNavigation();

  const handleItemClick = (item,index) => {
    setSelectedItemIndex(index);
    navigation.navigate(item)
  };

  const data = ['Home', 'profile', 'Setting'];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleItemClick(item,index)} style={[styles.itemContainer, selectedItemIndex === index && styles.selectedItem]}>
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display:"flex",
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      alignItems:"flex-start",
      paddingHorizontal: 5,
      position:"absolute",
      width:"50%",
      height:"100%",
    
  
      
    },
    itemContainer: {
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 2,
      borderRadius: 5,
      width:"100%"
    },
    selectedItem: {
      backgroundColor: '#C8DEFC',
    },
    itemText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      marginTop:"2%"
    },
  
  });

export default SideBar