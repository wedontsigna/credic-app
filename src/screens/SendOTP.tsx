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
  Center
} from 'native-base';

export default function SendOTP({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="90%"
        mx='auto'
      >
        <Center>
            <Heading  color='#333' fontWeight={100} >
               We have sent an OTP to your Mobile
            </Heading>
        </Center>
        <Center>
            <Heading color="muted.400" fontWeight={100} size="xs" textAlign="center">
                Please check your mobile number 071****82 Continue to reset your password
            </Heading>
        </Center>
        <Center my={5}>
            <HStack space={1} >
                <Center w="40px" h="40px" >
                    <Input placeholder="*" w="100%"/>
                </Center>
                <Center w="40px" h="40px" >
                    <Input placeholder="*" w="100%"/>
                </Center>
                <Center w="40px" h="40px" >
                    <Input placeholder="*" w="100%"/>
                </Center>
                <Center w="40px" h="40px" >
                    <Input placeholder="*" fontSize={14} w="100%"/>
                </Center>
            </HStack>
        </Center>
        <VStack space={2} mt={5}>
          <VStack  space={2}  mt={5}>
            <Button colorScheme="cyan" bg="#fc6011" borderRadius='full' onPress={() => navigation.navigate('FindFood')}  _text={{color: 'white' }}>
                Send
            </Button>
          </VStack>
        </VStack>
        <Center my={5}>
            <Text fontSize="xs">Don't receive ? 
            <Text fontSize="xs" bold color="#fc6011" mx={1}  >Cique here </Text>
            </Text>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
