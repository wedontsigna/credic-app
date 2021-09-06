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
  Stack,
  Image
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
        pb="40px"
        flex={1}
        w="100%"
        mx='auto'
        bg="#fff"
        mb="25px"
      >
        <Box mt={5}>
          <Text fontWeight="600" fontSize="lg"  fontFamily="Poppins_900Black">{<>Bonjour Julie</> }</Text>
        </Box>
        <Box mt={5}>
          <Text color="#ccc">{<>Livraison à </> }</Text>
        </Box>
        <Box>
          <Text fontWeight="900" color="#333">{<>Localisation actuelle <ChevronDownIcon  color="#ff0000" position="absolute" /></> }</Text>
        </Box>
        <Box mt={5}>
          <OurInputs placeholder="Search" />
        </Box>
        
        <ScrollView horizontal={true} my={5} mb={0}>
        <Stack space={3} alignItems="center">
          {/* <Heading>HStack</Heading> */}
          <HStack space={3} alignItems="center">
            <Center
              size={16}
              rounded="md"
              _text={{
                color: "white",
              }}
              
            >
              <Image source={require("../../assets/spagetti.png")}   alt="logo" size="md" />
            </Center>
            <Center
              size={16}
              rounded="md"
              _text={{
                color: "white",
              }}
            >
              <Image source={require("../../assets/satay.png")}   alt="logo" size="md" />
            </Center>
            <Center
              size={16}
              rounded="md"
              _text={{
                color: "white",
              }}
            >
             <Image source={require("../../assets/spagetti.png")}   alt="logo" size="md" />
            </Center>
            <Center
              size={16}
              rounded="md"
              _text={{
                color: "white",
              }}
            >
              <Image source={require("../../assets/recipe.png")}   alt="logo" size="md" />

            </Center>
            <Center
              size={16}
              rounded="md"
              _text={{
                color: "white",
              }}
            >
              <Image source={require("../../assets/spagetti.png")}   alt="logo" size="md" />

            </Center>
          </HStack>
        </Stack>
        </ScrollView>

        <Box  my={5}>
          <Text fontWeight="00" fontFamily="Poppins_900Black">{<>Restaurant Populaire</> }</Text>
        </Box>
        <Box>
          <BlockImageTitle onPress={() => navigation.navigate('Detail')}/>
          <BlockImageTitle onPress={() => navigation.navigate('Detail')}/>
          <BlockImageTitle onPress={() => navigation.navigate('Detail')}/>    
        </Box>

        <Box  my={5}>
          <Text fontWeight="00" fontFamily="Poppins_900Black">{<>Les plus populaires</> }</Text>
        </Box>
        <ScrollView horizontal={true}  mb={0}>
        <Stack space={3} alignItems="center">
          {/* <Heading>HStack</Heading> */}
          <HStack space={3} alignItems="center">
            <Center
              size="xl"
              _text={{
                color: "white",
              }}
              
            >
              <Image source={require("../../assets/spagetti.png")}   alt="logo" size="2xl" />

              
            </Center>
            <Center
              size="xl"
              _text={{
                color: "white",
              }}
              
            >
              <Image source={require("../../assets/spagetti.png")}   alt="logo" size="2xl" />
            </Center>
            
            <Center
              size="xl"
              _text={{
                color: "white",
              }}
              
            >
              <Image source={require("../../assets/spagetti.png")}   alt="logo" size="2xl" />
            </Center>
            
          </HStack>
        </Stack>
        </ScrollView>
        <Box  mt={5}>
          <Text fontWeight="600" fontSize="xl" fontFamily="Poppins_900Black">{<>Articles récents</> }</Text>
        </Box>

        <Box>
          <BlockImageTitleHorizontal onPress={() => navigation.navigate('Detail')} />
          <BlockImageTitleHorizontal onPress={() => navigation.navigate('Detail')} />
          <BlockImageTitleHorizontal onPress={() => navigation.navigate('Detail')} />
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
