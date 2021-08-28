import React from "react"
import {Box,
    Heading,
    Icon,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider} from "native-base"

export function RowMenu(props:any) {
  console.log(props);
  return (
    <HStack 
    alignItems="center" 
    space={4} 
    justifyContent="space-between" 
    p={5}
    boxSize={10}
    w="100%" 
    top={props.MyTop}
    mx={2} 
    my={4}>
    <HStack 
        bg="#fafafa" 
        borderTopLeftRadius="50px" 
        borderBottomLeftRadius="50px" 
        shadow={6}>
        <Box w="100%" size="md" h="100%"  >
            <Image
              w="80px"
              h="80px"
              position="absolute"
              left="-25%"
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              rounded="full"
              alt="image1"
              shadow={6}
              
            /> 
            <Text p={5} bold={true} fontSize={18} mx={5} my={3} onPress={props.onPress}>
              {props.texte}
            </Text>
        </Box>
    </HStack>
    
    </HStack >
  )
}