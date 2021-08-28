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
  ScrollView,
  Center
} from 'native-base';
import Titre from '../components/shared/Titre';
import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';
import BoutonBg from '../components/shared/BoutonBg';

export default function SignIn({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <ScrollView
        safeArea
        px={2}
        flex={1}
        w="100%"
        mx='auto'
        bg="#fff"
        mt={5}
      >
        <Heading  color='#333' textAlign="center" fontWeight={100} mt={5} >
          <Titre texte="S'inscrire" />
        </Heading>
        <Center mt={5}>
          <Texte texte="Ajoutez vos coordonnées pour vous inscrire" textAlign="center" />
        </Center>
        
        <VStack space={2} mt={5}>
          <Box mt={5}>
            <OurInputs placeholder="Nom" />
          </Box>
          <Box mt={5}>
            <OurInputs type="email" placeholder="Email" />
          </Box>
          <Box mt={5}>
            <OurInputs placeholder="Phone N°" />
          </Box>
          <Box mt={5}>
            <OurInputs placeholder="Adresse" />
          </Box>
          <Box mt={5}>
            <OurInputs type="password" placeholder="Password" />
          </Box>
          <Box mt={5}>
            <OurInputs type="password" placeholder="Confirmer password" />
          </Box>
          <VStack  space={2}  mt={5}>
            <Box mt={5}>
              <BoutonBg  texte="S'inscrire" />
            </Box>
          </VStack>
          <Center my={5}>
              <Texte texte={<>Vous avez dejà un compte ? <Text color="#ff0000" onPress={() => navigation.navigate('LoginScreen')}>Se connecter</Text></>} />
          </Center>
          
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
