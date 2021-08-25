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

export default function NewPassword({navigation}: {navigation: any}) {

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
              New password 
            </Heading>
        </Center>
        <Center>
            <Heading color="muted.400" fontWeight={100} size="xs" textAlign="center">
            Plaese enter your email adresse to create a new password via email
            </Heading>
        </Center>
        

        <VStack space={2} mt={5}>
          <FormControl mt={5}>
            <Input type="password" borderRadius='full' fontSize="xs" placeholder="New password" bg='#f0f0f0' />
           </FormControl>
           <FormControl mt={5}>
            <Input type="password" borderRadius='full' fontSize="xs" placeholder="Confirm password" bg='#f0f0f0' />
           </FormControl>
          <VStack  space={2}  mt={5}>
          <Button colorScheme="cyan" bg="#fc6011" borderRadius='full' onPress={() => navigation.navigate('FindFood')}  _text={{color: 'white' }}>
              Save
          </Button>
          </VStack>
          
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
