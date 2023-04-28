import { View, Text } from 'react-native'
import React from 'react'
import CardDetailsClinic from '../component/CardDetailsClinic'

const Clinic = ({ route, navigation }) => {

  const { itemId } = route.params;

      console.log(itemId,"141414141414");

  return (
    <View style={{flex:1}}>
        <View>
            
        </View>
     <CardDetailsClinic itemId={itemId}/>
    </View>
  )
}

export default Clinic