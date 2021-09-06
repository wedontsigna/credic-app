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
  ChevronDownIcon,
  CheckCircleIcon,
} from "native-base"
export const BlockImageTitle = (props:any) => {
  return (
    <Box
      width="100%"
      _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
    >
      <Box>
        <AspectRatio ratio={16 / 9} >
            <Image source={require("../../assets/spagetti.png")} w="100%" h="180px"  alt="logo" size="2xl" />
        </AspectRatio>
      </Box>

      <Stack p={4} space={2} >
        <Stack space={2}>
          <Heading size="sm" fontFamily="Poppins_700Bold" mb={-2} ml={-1}>
            <Text onPress={props.onPress}>
            The Garden City
            </Text>
          </Heading>
          <Heading
            size="xs"
            _light={{
              color: "#ccc",
            }}
            _dark={{
              color: "#ccc",
            }}
            fontWeight="100"
          >
           <Text onPress={props.onPress}> <CheckCircleIcon color="#ff0000" size="xs" mb={-1} mr={2} /> (124 rating) Café Nourriture africaine</Text>
          </Heading>
        </Stack>
        
      </Stack>
    </Box>
  )
}
