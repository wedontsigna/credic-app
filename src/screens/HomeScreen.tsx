import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  Center,
  Text,
  Flex,
  Box,
  Spacer,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Image,
} from "native-base";
import Bouton from "../components/shared/Bouton";
import BoutonBg from "../components/shared/BoutonBg";
import Texte from "../components/shared/Texte";

export default function HomeScreen({navigation}: {navigation: any}) {
  
  return (
    <Box flex={1}>
      <Flex h="100%" bg="#fff" w="100%" >
        <Box flex={3} >
          <Image source={require("../../assets/home.png")}  alt="logo" style={{ width: '100%', height: 500 }} />
          <Center>
            <Texte texte="Votre plat préféré à votre porté"></Texte>
          </Center>
        </Box>
       
        <Box flex={1} >
          
          <Center mx={2} mt={5}>
            <Box my={2} w="100%" mx={2}>
              <BoutonBg texte="Se connecter" onPress={() => navigation.navigate('LoginScreen')}  _text={{color: 'white' }} />
            </Box>
            <Box my={2} w="100%" mx={2}>
              <Bouton w="100%" texte="S'inscrire" onPress={() => navigation.navigate('SignIn')} />
            </Box>
            
          </Center>
        </Box>
      </Flex>
      
    </Box>
  );
}


const styles = {
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,
  },
 
}