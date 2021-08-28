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

export default function FindFood({navigation}: {navigation: any}) {

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
        <Image source={require("../../assets/food.jpg")}  resizeMode="cover" alt="logo" size="2xl" />
        </Center>
        <Center>
            <Heading  color='#333' textAlign="center" fontWeight={100} >
              <Titre texte=" Trouvez la nourriture que vous aimez" />
            </Heading>
        </Center>
        <Box>
            <Texte textAlign="center" texte="Decouvrez les meilleurs aliments de plus de 1000 restaurants et une livraison rapide à votre porte" fontSize="xs" />
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