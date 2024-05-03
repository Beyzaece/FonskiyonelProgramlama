import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const FoodItem = ({item}) => {
    const data=[item];
  return (
    <View>
      {data?.map((item,index) => (
          <>
          <Pressable style={{margin:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} key={index}>
              <Text style={{fontSize:19,fontWeight:"bold"}}>{item?.name} ({item?.items?.length})</Text>
              <AntDesign name="downcircleo" size={24} color="black" />
          </Pressable>

            {item?.items?.map((item,index) => (
                <MenuItem key={index} item={item}/>
            ))}
          </>
          
      ))}
    </View>
  )
}
export default FoodItem

const styles = StyleSheet.create({})