import * as React from 'react';
import { VStack, 
    Button, 
    Text,
    Image, 
    Input, 
    Box, 
    Center, 
    NativeBaseProvider, 
    FormControl } from "native-base";



export default function ProfileScreen({navigation}: {navigation: any}) {
  return (
  <NativeBaseProvider>
  <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
        mx='auto'
      >
    <Box>
    <Image 
        size={50}
        resizeMode={"contain"}
        borderRadius={100}
        source={require("../../assets/Dessert1.jpg")} alt="Image de profil" width={'100%'} height={'220'} />
      
    </Box>
    <Box>
    <Center>
      <Text bold fontSize='10'
            color='#ea580c'>
        Edit profil
      </Text>
    </Center>
    </Box>
    
    <Box>
    <Center>
      <Text bold fontSize='14'
            color='#312e81'>
        Hi there Emilia!
      </Text>
    </Center>
    </Box>
    
    <Box>
    <Center>
      <Text bold fontSize='10'
            color='#a8a29e'>
        Sign Out
      </Text>
    </Center>
    </Box>
  
  <VStack space={2} alignItems="center">
    <Text color='#333' fontSize="3xl">Profile</Text>
    <Text color="muted.400" fontSize="xs">add your delais to login</Text>
  </VStack>
   
    <VStack space={2}>
    <FormControl mt={5}>
      <Input
        borderRadius='full' 
        fontSize="xs" 
        placeholder="Your Email" 
        bg='#f0f0f0'/>
    </FormControl>

    <FormControl mt={5}>
      <Input
        borderRadius='full' 
        fontSize="xs" 
        placeholder="Password" 
        bg='#f0f0f0'/>
    </FormControl>
    </VStack>
   
    <VStack space={2} mt={5}>
     <Button 
       colorScheme="cyan" 
       bg="#fc6011" 
       borderRadius='full'  
       _text={{color: 'white' }}>         
         Login </Button>
    </VStack>

    <Center my={5}>
        <Text fontSize="xs">Forgot your password?</Text>
    </Center>  

    <Center my={5}>
        <Text fontSize="xs">Or Login with</Text>
    </Center> 
     
    <VStack space={1} mt={5}>
     <Button 
        w="100%"
       colorScheme="cyan" 
       bg="blue.800"
       borderRadius='full'  
       _text={{color: 'white' }}         
       shadow={2}
       onPress={() => navigation.navigate('LastOffersScreen')}>         
             Login with Facebook</Button>
    </VStack>

    <VStack space={1} mt={5}>
     <Button 
       w="100%"
       colorScheme="danger"
       bg="#dc2626"
       borderRadius='full'  
       _text={{color: 'white' }}         
       shadow={2}
       onPress={() => navigation.navigate('DessertScreen')}>         
             Login with Google
          </Button>
    </VStack>
       

    <Center mt={5}>
       <Text fontSize="xs">
          Don't have An Accoint? <Text bold color='orange.700' fontSize="xs" onPress={() => navigation.navigate('FindFoodScreen')}>Sign Up</Text>
      </Text>       
    </Center>
    </Box>
    </NativeBaseProvider>
  );
}
