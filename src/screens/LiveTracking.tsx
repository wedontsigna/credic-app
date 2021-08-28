import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {StyleSheet} from 'react-native'
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

export default function LiveTracking({navigation}: {navigation: any}) {

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
        
        <Center flex={1} h={40}>
        <Image source={require("../../assets/track.png")}  resizeMode="cover" alt="logo" size="2xl" />
        </Center>
        <Center>
            <Heading  color='#333' textAlign="center" fontWeight={100} >
              <Titre texte="Suivis en direct" />
            </Heading>
        </Center>
        <Box>
            <Texte textAlign="center" texte="Suivis en temps de vos aliments sur application une fois la commande passée" fontSize="xs" />
        </Box>
       
        <VStack space={2} mt={5}>
          <VStack  space={2}  mt={5}>
            <BoutonBg texte="Next" onPress={() => navigation.navigate('GoodMorning')} />
          </VStack>
          
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

var styles = StyleSheet.create({
  image: {
      width: "107px",
      height: "165px",
    }
  });