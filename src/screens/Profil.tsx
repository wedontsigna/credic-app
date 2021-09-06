import * as React from 'react';
import { VStack, 
    Button, 
    Text,
    Image, 
    Input, 
    Box, 
    Center, 
    NativeBaseProvider, 
    ScrollView,
    FormControl } from "native-base";

import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';
import BoutonBg from '../components/shared/BoutonBg';
import Footer from '../components/shared/Footer';

export default function ProfileScreen({navigation}: {navigation: any}) {
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
    <Center >
        <Image rounded="full"
            resizeMode={"contain"}
            source={require("../../assets/Dessert1.jpg")} alt="Image de profil" width={'100px'} height={'100px'} />
    </Center>
    <Box>
      <Center>
      <Text 
          fontSize="md" 
          textAlign="center" 
          style={{fontFamily:"Poppins_400Regular" }}  
          color="#ff0000" >Edit profil</Text>
      </Center>
    </Box>
    
      <Box>
        <Center>
          <Text fontSize="xl" fontFamily="Poppins_600SemiBold"
                color='#312e81'>
            Hi there Emilia!
          </Text>
        </Center>
      </Box>
    <Box>
      <Center>
        <Text fontSize="md" style={{fontFamily:"Poppins_400Regular" }} 
              color='#a8a29e'>
          Sign Out
        </Text>
      </Center>
    </Box>
    <VStack space={2} mt={5} mx={2}>
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
      </VStack>
    </Box>
    </ScrollView>
    <Footer 
      onPress1={() => navigation.navigate('Menu')}
      onPress2={() => navigation.navigate('LastOffersScreen')}
      onPress3={() => navigation.navigate('GoodMorning')}
      onPress4={() => navigation.navigate('Profil')}
      onPress5={() => navigation.navigate('Plus')}
      
      />
    </NativeBaseProvider>
  );
}