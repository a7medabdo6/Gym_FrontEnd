import { View, Text } from 'react-native'
import React from 'react'
import CardDetailsGym from '../component/CardDetailsGym'

const Gym = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={{flex:1}}>
        <View>
            
        </View>
     <CardDetailsGym itemId={itemId}/>
    </View>
  )
}

export default Gym