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
  ScrollView,
} from "native-base"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import Footer from "../components/shared/Footer"

export const Detail = ({navigation}: {navigation: any}) => {
  return (
    
    <Box
      width="100%"
      h="100%"
      _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
      bg="#fff"
    >
      <ScrollView
        safeArea
        flex={1}
        w="100%"
        mx='auto'
        bg="#fff"
      >
      <Box h="50%">
        <AspectRatio>
          <Image
            h="350px"
            roundedTop="lg"
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>

      <Stack p={5} space={2} mt="-20px" bg="#fff" borderTopRightRadius="50px" borderTopLeftRadius="50px">
        <Stack space={2}>
           <Box  position="absolute"
                zIndex={999}
                top="-50%"
                bg="#fff"
                p={2}
               rounded="full"
               shadow={6}
                right="0">
            <Icon
                as={<Ionicons name="ios-chatbubbles" />}
                color="gray.500"
                size="2xl"
                _light={{
                  color: "red.500",
                }}
                _dark={{
                  color: "red.300",
                }}
              />
           </Box>
          <Heading size="md"  ml={-1} >
            <Text fontFamily="Poppins_600SemiBold" fontSize="2xl" my={5} mx={5}>
              The Garden City
             
            </Text>
            

          </Heading>
          <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon
              as={<MaterialIcons name="access-time" />}
              color="gray.500"
              size="md"
            />
            <Text ml={1} color="gray.500" fontSize="md" fontWeight="500" fontFamily="Poppins_400Regular" >
              4 Stars rating
              
            </Text>
          </HStack>
          <HStack alignItems="center">
          
            <Text ml={1} color="#333" fontWeight="500" fontSize="3xl" fontFamily="Poppins_700Bold">
              750 Dh 
            </Text>
          </HStack>
            </HStack>
            <Heading
                size="xs"
                fontWeight="600"
            >
              <Text fontFamily="Poppins_400Regular" fontSize="md">
                The Silicon Valley of India.
              </Text>
            </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400} fontSize="md" fontFamily="Poppins_400Regular">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
            <Heading
              fontSize="md"
                size="xs"
                fontWeight="600"
            >
              <Text fontFamily="Poppins_400Regular" fontSize="md" >
                The Silicon Valley of India.
              </Text>
            </Heading>
      </Stack>
      </ScrollView>
      <Footer 
      onPress1={() => navigation.navigate('Menu')}
      onPress2={() => navigation.navigate('LastOffersScreen')}
      onPress3={() => navigation.navigate('SignIn')}
      
      />
    </Box>
    
  )
}


