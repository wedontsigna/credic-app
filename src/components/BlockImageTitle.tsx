import React from "react"
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"
export const BlockImageTitle = () => {
  return (
    <Box
      width="100%"
      shadow={1}
      _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
      my={4}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            The Garden City
          </Heading>
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
        </Stack>
        
      </Stack>
    </Box>
  )
}
