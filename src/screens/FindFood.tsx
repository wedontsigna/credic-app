import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  Center,
  Image
} from 'native-base';

export default function FindFood({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
        
        <Center flex={1}>
            <Image
                size={150}
                alt="fallback text"
                source={{
                    uri: "https://-page-icon.png", // uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                fallbackSource={{
                    uri: "https://www.w3schools.com/css/img_lights.jpg",
                }}
                />
        </Center>
        <Center>
            <Heading  color='#333' fontWeight={100} >
              Find food you love
            </Heading>
        </Center>
        <Center>
            <Heading color="muted.400" fontWeight={100} size="xs" textAlign="center">
            Discover the best foods from over 1000 restaurant and fast delivery to your doorstep
            </Heading>
        </Center>
        <VStack space={2} mt={5}>
          <VStack  space={2}  mt={5}>
          <Button colorScheme="cyan" bg="#fc6011" borderRadius='full' onPress={() => navigation.navigate('FastDelivery')}  _text={{color: 'white' }}>
              Next
          </Button>
          </VStack>
          
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
