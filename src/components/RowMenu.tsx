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
    minHeight="100px"
    boxSize={10}
    position="absolute"
    right={0}
    top={props.MyTop}
   
    m={2} w="98vw" mx={2} my={4}>
        <HStack alignItems="center" h="80px"
        position="absolute"
        left="40px" top="20px" zIndex={99} w="25%">
        <Box   w="80px"
            h="80px" rounded="full" >
          <AspectRatio ratio={16 / 9}>
            <Image
            w="60px"
            h="60px"
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              rounded="full"
              alt="image1"
              shadow={6}
              
            />
          </AspectRatio>
      </Box>
    </HStack>
        <HStack bg="#fafafa"borderTopLeftRadius="50px" borderBottomLeftRadius="50px"  alignItems="center" h="80px" w="85%" shadow={6}>
            <Box w="100%" size="md" h="100%"  >
                <Text p={5} bold={true} fontSize={18} mx={5} my={3}>
                    {props.texte}
                </Text>
            </Box>
        </HStack>
    </HStack>
  )
}