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

export function BlockImageTitleHorizontal(props:any) {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between" mx={2} my={4}>
        <HStack alignItems="center" w="35%">
        <Box w="100%">
          <AspectRatio ratio={16 / 9}>
            <Image source={require("../../assets/spagetti.png")} w="100%" h="80px"  alt="logo" size="xl"  />
          </AspectRatio>
      </Box>
    </HStack>
        <HStack alignItems="center" w="63%">
          <Box w="100%">
            <Heading size="sm" w='100%'  ml={-1}>
              <Text fontFamily="Poppins_700Bold" onPress={props.onPress} >The Garden City</Text>

              <Box w="100%">
                <Heading
                  size="xs"
                  _light={{
                    color: "red.500",
                  }}
                  _dark={{
                    color: "red.300",
                  }}
                  fontWeight="100"
                  ml={-0.5}
                  mt={-1}
                >
                  <Text fontWeight="200" onPress={props.onPress} size="sm" color="#ccc">Café <Text color="#ff0000">.</Text> Nourriture Afro</Text> /
                  <Text fontWeight={200} size="sm" color="#ccc" onPress={props.onPress}>(124 rating)</Text>
                </Heading>
                
              </Box>
            </Heading>
            
          </Box>
          
        </HStack>
    </HStack>
  )
}