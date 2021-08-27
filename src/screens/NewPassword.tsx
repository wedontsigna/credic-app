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

export default function NewPassword({navigation}: {navigation: any}) {

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
          <Titre texte="Nouveau mot de passe" />
        </Heading>
        <Box mt={5}>
          <Center>
          <Texte texte="Veuillez entrer votre nouveau mot de passe"  fontSize="xs" />
          </Center>
        </Box>
        
        <VStack space={2} mt={5}>
            <Box mt={5}>
                <OurInputs placeholder="Nouveau mot de passe" />
            </Box>
            <Box mt={5}>
                <OurInputs placeholder="Confirmer nouveau mot de passe" />
            </Box>
            
          <VStack  space={2}  mt={5}>
            <BoutonBg texte="Suivant" onPress={() => navigation.navigate('MySlider')}/>
          </VStack>
          
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
