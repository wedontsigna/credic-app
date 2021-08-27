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
import Titre from '../components/shared/Titre';
import Texte from '../components/shared/Texte';
import BoutonBg from '../components/shared/BoutonBg';

export default function SendOTP({navigation}: {navigation: any}) {

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
         <Heading  color='#333' textAlign="center" fontWeight={100} >
          <Titre texte="Nous avons envoyé un OTP à votre téléphone portable" />
        </Heading>
        <Box mt={5} textAlign="center">
            <Texte texte="Veuillez verifier numéro de téléphone +241077** ** 26 Continuer de renitialiser le mot de passe" fontSize="xs" />
        </Box>
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
            <Box mt={5}>
                <BoutonBg texte="Envoyer" placeholder="Email" onPress={() => navigation.navigate('ResetPassword')}/>
            </Box>
          </VStack>
        </VStack>
        <Center mt={5}>
            <Texte texte={<>Vous n'avez pas reçu ? <Text color="#ff0000" onPress={() => navigation.navigate('ResetPassword')}>Cliquez ici</Text></>} />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
