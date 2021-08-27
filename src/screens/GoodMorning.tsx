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
} from 'native-base';
import { BlockImageTitle } from '../components/BlockImageTitle';
import { BlockImageTitleHorizontal } from '../components/BlockImageTitleHorizontal';
import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';

export default function GoodMorning({navigation}: {navigation: any}) {

 return (
    <NativeBaseProvider bg="#fff">
      <Box safeArea  p={2} w="100%" my={5} mx={0} bg="#fff" flex={1}>
        <Box >
          <Text fontWeight="600" fontFamily="Poppins_900Black">{<>Bonjour Julie</> }</Text>
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
      </Box>
  </NativeBaseProvider>
  );
}
