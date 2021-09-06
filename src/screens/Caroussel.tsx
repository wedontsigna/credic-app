import { Button } from 'native-base'
import React from 'react'
import { View } from "react-native"
import Carousel , { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/shared/CarouselCardItem'
import FastDelivery from './FastDelivery'
import FindFood from './FindFood'
import LiveTracking from './LiveTracking'


const CarouselCards = (props:any) => {
  const data = [
    {
      title: "Find Food",
      body: <FindFood navigation={props.navigation}/>,
    },
    {
      title: "Fast delivery",
      body: <FastDelivery navigation={props.navigation}/>,
    },
    {
      title: "Lorem Ipsum",
      body: <LiveTracking navigation={props.navigation}/>,
    }];

    const [index, setIndex] = React.useState(0)

  const isCarousel = React.useRef(null)

  const wedo=()=>{
    setIndex(2)
  }


  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      
    </View>
  )
}


export default CarouselCards