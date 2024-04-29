import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Carousel = () => {
    const images=[
        "https://image.milimaj.com/i/milliyet/75/0x410/609a555d55427f0a548a5f57.jpg",
        "https://i.nefisyemektarifleri.com/2023/04/03/izmirde-hamburger-yiyebileceginiz-en-iyi-10-mekan.jpg"
    ];
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"94%",
            marginTop:10
        }}
      />
    </View>
  return (
    <View>
      <Text>Carousel</Text>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})