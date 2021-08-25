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
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { AccordionExample } from "../components/AccordionExample"
export const Detail = () => {
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

      <Stack p={5} space={2} mt="-40px" bg="#fff" borderTopRightRadius="50px" borderTopLeftRadius="50px">
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            The Garden City
          </Heading>
          <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon
              as={<MaterialIcons name="access-time" />}
              color="gray.500"
              size="sm"
            />
            <Text ml={1} color="gray.500" fontWeight="500">
              4 Stars rating
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon
              as={<Ionicons name="ios-chatbubbles" />}
              color="gray.500"
              size="sm"
            />

            <Text ml={1} color="gray.500" fontWeight="500">
              750 Dh 
            </Text>
          </HStack>
            </HStack>
            <Heading
                size="xs"
                fontWeight="600"
            >
                The Silicon Valley of India.
            </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
            <Heading
                size="xs"
                fontWeight="600"
            >
                The Silicon Valley of India.
            </Heading>
            <AccordionExample />
      </Stack>
    </Box>
  )
}


