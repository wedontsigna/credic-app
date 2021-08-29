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
  CheckIcon,
  Icon,
  IconButton,
  HStack,
  Divider,
  ChevronDownIcon ,
  Center,
  Select,
  ScrollView,
} from 'native-base';
import { BlockImageTitle } from '../components/BlockImageTitle';
import { BlockImageTitleHorizontal } from '../components/BlockImageTitleHorizontal';
import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';
import Footer from '../components/shared/Footer';

export default function GoodMorning({navigation}: {navigation: any}) {

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
        <Box mt={5}>
          <Text fontWeight="600" fontSize="lg" fontFamily="Poppins_900Black">{<>Bonjour Julie</> }</Text>
        </Box>
        <Box mt={5}>
          <Texte texte="Livraison à "  mx={2} my="1" />
        </Box>
        <Box mt={5} >
          <Text fontWeight="600">{<>Localisation actuelle <ChevronDownIcon  color="#ff0000" position="absolute" /></> }</Text>
        </Box>
        <Box mt={5}>
          <OurInputs placeholder="Search" />
        </Box>
        <Box  mt={5}>
          <Text fontWeight="600" fontFamily="Poppins_900Black">{<>Restaurant Populaire</> }</Text>
        </Box>
        <Box>
          <BlockImageTitle />
          <BlockImageTitle />
          <BlockImageTitle />    
        </Box>
        <Box  mt={5}>
          <Text fontWeight="600" fontFamily="Poppins_900Black">{<>Articles récents</> }</Text>
        </Box>

        <Box>
          <BlockImageTitleHorizontal />
          <BlockImageTitleHorizontal />
          <BlockImageTitleHorizontal />
        </Box>
      </ScrollView>
      <Footer 
      onPress1={() => navigation.navigate('Menu')}
      onPress2={() => navigation.navigate('LastOffersScreen')}
      onPress3={() => navigation.navigate('Home')}
      onPress4={() => navigation.navigate('Profil')}
      onPress5={() => navigation.navigate('Plus')}
      
      />
  </NativeBaseProvider>
  );
}
