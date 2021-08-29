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
  Image,
  ScrollView,
} from 'native-base';
import OurInputs from '../components/shared/OurInput';
import Titre from '../components/shared/Titre';
import Footer from '../components/shared/Footer';

export default function DessertScreen({navigation}: {navigation: any}) {

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
      <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
        bg="#fff"
        
      >
        <Heading  color='#333' textAlign="center" fontWeight={100} >
              <Titre texte="Desserts" />
        </Heading>

        <VStack space={2} mt={0}>
          <OurInputs placeholder="Recherche de la nourriture" />
        </VStack>
         
        
            <Box shadow={2} 
                mt={"5"}
                w='100%'>
                <Image source={require("../../assets/Dessert1.jpg")} alt="logo" width={'100%'} height={'220'} />
                <Text  onPress={() => navigation.navigate('Detail')} bold position='absolute'  color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
                  Desserts 01{"\n"}
                  <Text color='white' fontSize={12} mb={1}>
                    Minute by tuk tuk Desserts 01
                  </Text>
                </Text>
            </Box>

            <Box shadow={2}
                mt={"1"}
                w='100%'>
              <Image source={require("../../assets/Food8.jpg")} alt="logo" width={'100%'} height={'220'} />
              <Text bold position='absolute' onPress={() => navigation.navigate('Detail')} color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
                Desserts 02 {"\n"}
                <Text color='white' fontSize={12} mb={1}>
                  Minute by tuk tuk Desserts 02
                </Text>
              </Text>
            </Box>

            <Box shadow={2}
                mt={"1"}
                w='100%'>
              <Image source={require("../../assets/Dessert3.jpg")} alt="logo" width={'100%'} height={'220'} />
              <Text bold position='absolute' onPress={() => navigation.navigate('Detail')} color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Desserts 03 {"\n"}
               <Text color='white' fontSize={12} mb={1}>
                 Minute by tuk tuk Desserts 03
               </Text>
            </Text>
            </Box>

            <Box shadow={2}
                mt={"1"}
                w='100%'>
            <Image source={require("../../assets/Dessert4.jpg")} alt="logo" width={'100%'} height={'220'} />
            <Text bold position='absolute'  color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Desserts 04 {"\n"}
               <Text color='white' onPress={() => navigation.navigate('Detail')} fontSize={12} mb={1}>
                 Minute by tuk tuk Desserts 04
               </Text>
            </Text>
            </Box>
          
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
