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

export default function App({navigation}: {navigation: any}) {
  return (
    <Center safeArea flex={1} p={2} w="100%" mx="auto">
      <Image source={require("../../assets/logo.png")} alt="logo" size="2xl" />
      <Box style={{ marginBottom: 20 }}>
        <Text>Votre plat préféré à votre porte</Text>
      </Box>
      <VStack space={2} mt={5}>
        <Button
          colorScheme="primary"
          _text={{ color: "white" }}
          size="lg"
          variant="rounded"
        >
          Se connecter
        </Button>
        <Button
          onPress={() => navigation.navigate('SignIn')} 
          colorScheme="primary"
          _text={{ color: "secondary.500" }}
          variant="rounded"
        >
          Créer un compte
        </Button>
      </VStack>
    </Center>
  );
}
