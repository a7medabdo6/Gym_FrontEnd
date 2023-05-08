import { View, Text } from 'react-native'
import React from 'react'
import CradDetailsResturant from '../component/CradDetailsResturant';

const Resturant = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={{flex:1}}>
        <View>
            
        </View>
     <CradDetailsResturant itemId={itemId}/>
    </View>
  )
}
export default Resturant