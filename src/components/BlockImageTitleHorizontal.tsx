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

export function BlockImageTitleHorizontal() {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between" mx={2} my={4}>
        <HStack alignItems="center" w="35%">
        <Box w="100%">
          <AspectRatio ratio={16 / 9}>
            <Image
              roundedTop="lg"
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image1"
              w="100%"
            />
          </AspectRatio>
      </Box>
    </HStack>
        <HStack alignItems="center" w="63%">
          <Box w="100%">
            <Heading size="sm" w='100%' fontFamily="Poppins_700Bold" ml={-1}>
              The Garden City
              <Box w="100%">
                <Heading
                  size="xs"
                  _light={{
                    color: "red.500",
                  }}
                  _dark={{
                    color: "red.300",
                  }}
                  fontWeight="500"
                  ml={-0.5}
                  mt={-1}
                >
                  The Silicon Valley of India.
                </Heading>
                </Box>
            </Heading>
          </Box>
          
        </HStack>
    </HStack>
  )
}