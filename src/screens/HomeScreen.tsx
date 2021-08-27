import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  Center,
  Text,
  Box,
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

export default function App({navigation}: {navigation: any}) {
  return (
    <Box safeArea  p={2} w="100%" mx={0} bg="#fff" flex={1} >
      <Box h="40vh" w="100%" bg="#53afe3">

      </Box>
      <Center mt={-100} w="50vw" h="50vw" bg="#fff" mx="auto" rounded="full" style={{boxShadow:"-1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset"}}>
        <Image source={require("../../assets/carre.png")} resizeMode="cover" alt="logo" size="2xl" />
      </Center>
      <Center mt={4}>
        <Text fontFamily="Poppins_400Regular">Votre plat préféré à votre porté</Text>
      </Center>
      <VStack space={2} mt="30%" mx={2}>
          <BoutonBg texte="Se connecter" onPress={() => navigation.navigate('LoginScreen')}  _text={{color: 'white' }} />

          <Bouton texte="S'inscrire" onPress={() => navigation.navigate('SignIn')} />
      </VStack>
    </Box>
  );
}
