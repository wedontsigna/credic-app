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
import Titre from '../components/shared/Titre';
import BoutonBg from '../components/shared/BoutonBg';
import Texte from '../components/shared/Texte';

export default function FastDelivery({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
        mx='auto'
        h="100vh"
        bg="#fff"
      >
        
        <Center flex={0.9} h={40}>
          <Image source={require("../../assets/delivery-man.png")} resizeMode="cover" alt="logo" size="2xl" />
        </Center>
        <Center>
            <Heading  color='#333' textAlign="center" fontWeight={100} >
              <Titre texte="Livraison rapide" />
            </Heading>
        </Center>
        <Box mt={5}>
            <Texte texte="Livraison de restauration rapide à domicile,au bureau ou  que vous soyez" fontSize="xs" />
        </Box>
       
        <VStack space={2} mt={5}>
          <VStack  space={2}  mt={5}>
            <BoutonBg texte="Next" onPress={() => navigation.navigate('GoodMorning')}/>
          
          </VStack>
          
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
