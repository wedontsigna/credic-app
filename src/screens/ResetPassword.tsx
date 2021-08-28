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
import OurInputs from '../components/shared/OurInput';
import BoutonBg from '../components/shared/BoutonBg';

export default function ResetPassword({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
        mx='auto'
      >
        
        <Heading  color='#333' textAlign="center" fontWeight={100} >
          <Titre texte="Renitialiser le mot de passe" />
        </Heading>
        <Box mt={5}>
          <Texte textAlign="center" texte="Veuillez entrer votre email pour recevoir un lien pour créer un nouveau mot de passe" color="muted.400" fontSize="xs" />
        </Box>
        
        <VStack>
         <Box mt={5}>
            <OurInputs placeholder="email" />
         </Box>
         <Box mt={5}>
            <BoutonBg texte="Envoyer" placeholder="Email" onPress={() => navigation.navigate('SendOTP')}/>
         </Box>
         
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
