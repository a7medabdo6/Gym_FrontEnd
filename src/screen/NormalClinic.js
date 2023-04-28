import { View, Text } from 'react-native'
import React from 'react'
import CardDetailsNormalClinic from '../component/CardDetailsNormalClinic'

const NormalClinic = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={{flex:1}}>
      <CardDetailsNormalClinic itemId={itemId} />
    </View>
  )
}

export default NormalClinic