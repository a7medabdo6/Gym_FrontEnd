import { View, Text } from 'react-native'
import React from 'react'
import CardDetailsStores from '../component/CardDetailsStores'
const Stores = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={{flex:1}}>
        <View>
            
        </View>
     <CardDetailsStores itemId={itemId}/>
    </View>
  )
}

export default Stores