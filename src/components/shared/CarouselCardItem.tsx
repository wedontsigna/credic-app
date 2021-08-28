import { Box, Button } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

const CarouselCardItem = (props:any) => {

    let item=props.item;
    let index=props.index;

  return (
    <Box style={styles.container} key={index}>
        {item.body}
        
    </Box>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "100%",
    height:"100%"
  },
})

export default CarouselCardItem