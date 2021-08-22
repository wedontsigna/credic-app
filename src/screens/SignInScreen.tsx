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

export default function SignIn({navigation}) {

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
               Sign up
            </Heading>
        </Center>
        <Center>
            <Heading color="muted.400" fontWeight={100} size="xs">
              Sign up to continue!
            </Heading>
        </Center>
        

        <VStack space={2} mt={5}>
          <FormControl mt={5}>
            <Input borderRadius='full' fontSize="xs" placeholder="Name" bg='#f0f0f0' />
           </FormControl>
          <FormControl mt={5}>
            <Input type="email" fontSize="xs" borderRadius='full' placeholder="Email" bg='#f0f0f0' />
          </FormControl>
          <FormControl mt={5}>
            <Input borderRadius='full' fontSize="xs" placeholder="Phone N°" bg='#f0f0f0' />
          </FormControl>
          <FormControl mt={5}>
            <Input borderRadius='full' fontSize="xs" placeholder="Adresse" bg='#f0f0f0'/>
          </FormControl>
          <FormControl mt={5}>
            <Input borderRadius='full' fontSize="xs" placeholder="Password" bg='#f0f0f0'/>
          </FormControl>
          <FormControl mt={5}>
            <Input borderRadius='full' fontSize="xs" placeholder="Confirmer password" bg='#f0f0f0'/>
          </FormControl>
         
          <VStack  space={2}  mt={5}>
          <Button colorScheme="cyan" bg="#fc6011" borderRadius='full'  _text={{color: 'white' }}>
              SignUp
          </Button>
          </VStack>
          <Center my={5}>
            <Text fontSize="xs">Already have an account? 
            <Text fontSize="xs" bold color="#fc6011" mx={1}>Login</Text>
            </Text>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
