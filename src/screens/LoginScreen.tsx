import * as React from 'react';
import { VStack, 
    Button, 
    Text, 
    Input, 
    Box, 
    Center, 
    NativeBaseProvider, 
    FormControl } from "native-base";
import Titre from '../components/shared/Titre';
import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';
import BoutonBg from '../components/shared/BoutonBg';



export default function LoginScreen({navigation}: {navigation: any}) {
  console.log(navigation);
  return (
  <NativeBaseProvider>
  <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
        mx='auto'
        bg="#fff"
      >
  
  <VStack space={2} alignItems="center" mt={5}>
    <Titre texte="Se connecter" />
    <Texte texte="Entrez vos informations" color="muted.400" fontSize="xs" />
  </VStack>
   
    <VStack space={2}>
      <Box mt={5}>
        <OurInputs placeholder="Nom" />
      </Box>
      <Box mt={5}>
        <OurInputs placeholder="Prenom " />
      </Box>
      <Box mt={5}> 
        <BoutonBg texte="Se connecter" onPress={() => navigation.navigate('MySlider')} />
      </Box>
    
    </VStack>

    <Center my={5}>
        <Texte texte="Mot de passe oublié ?" onPress={() => navigation.navigate('ResetPassword')} />
    </Center>  
    <Center my={5}>
        <Texte texte="Ou connectez vous avec ?" />
    </Center>

    <VStack space={1} mt={5}>
      <Button 
      onPress={() => navigation.navigate('Menu')}
          w="100%"
        colorScheme="cyan" 
        bg="#1877f2"
        borderRadius='full'  
        _text={{color: 'white' }}         
        shadow={2}
       >         
        Se connecter avec facebook</Button>
    </VStack>

    <VStack space={1} mt={5}>
     <Button 
       w="100%"
       colorScheme="danger"
       bg="#cf3f32"
       borderRadius='full'  
       _text={{color: 'white' }}         
       shadow={2}
       onPress={() => navigation.navigate('DessertScreen')}
       >         
             Se connecter avec Google
          </Button>
    </VStack>
       

    <Center mt={5}>
        <Texte texte={<>Vous n'avez pas de compte ? <Text color="#ff0000" onPress={() => navigation.navigate('SignIn')}>S'inscrire</Text></>} />
              
    </Center>
    </Box>
    </NativeBaseProvider>
  );
}
