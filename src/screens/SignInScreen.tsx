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
  ScrollView,
  Center
} from 'native-base';
import Titre from '../components/shared/Titre';
import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';
import BoutonBg from '../components/shared/BoutonBg';
import { gql, useMutation, useQuery } from '@apollo/client'
import { useState } from 'react';


const LOGINMUTATION =gql`
mutation LOGINMUTATION(
  $nom: String!
  $adresse: String!
  $phone: String!
  $username: String!
  $email: String!
  $password: String!
)  {
  register(input: {nom:$nom,adresse:$adresse,phone:$phone,username: $username, email: $email, password: $password }) {
    jwt
    user {
      username
      email
    }
  }
}`

export default function SignIn({navigation}: {navigation: any}) {



  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmepassword, setConfirmepasssword] = useState('');

  const inputs={
    nom: nom,
    adresse: adresse,
    phone: phone,
    username: email,
    email:email,
    password:password
  }

  const [login,{data}]=useMutation(LOGINMUTATION, {
    variables:inputs
  });


  const saveUser=()=>{
   console.log(login());
  }

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
        <Heading  color='#333' textAlign="center" fontWeight={100} mt={5} >
          <Titre texte="S'inscrire" />
        </Heading>
        <Center mt={5}>
          <Texte texte="Ajoutez vos coordonnées pour vous inscrire" textAlign="center" />
        </Center>
        
        <VStack space={2} mt={5}>
          <Box mt={5}>
            <Input
              borderRadius='full' 
              fontSize="lg" 
              type="text"
              onChangeText={nom => setNom(nom)}
              value={nom}
              fontFamily="Poppins_300Light"
              placeholder="Nom"
              bg='#e8e8e8' />
          </Box>
          <Box mt={5}>
            <Input
                borderRadius='full' 
                fontSize="lg" 
                type="text"
                fontFamily="Poppins_300Light"
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
                bg='#e8e8e8' />
          </Box>
          <Box mt={5}>
          <Input
              borderRadius='full' 
              fontSize="lg" 
              type="text"
              fontFamily="Poppins_300Light"
              onChangeText={phone => setPhone(phone)}
              value={phone}
              placeholder="Phone"
              bg='#e8e8e8' />
          </Box>
          <Box mt={5}>
            <Input
              borderRadius='full' 
              fontSize="lg" 
              type="text"
              onChangeText={adresse => setAdresse(adresse)}
              value={adresse}
              fontFamily="Poppins_300Light"
              placeholder="Adresse"
              bg='#e8e8e8' />
          </Box>
          <Box mt={5}>
            <Input
                borderRadius='full' 
                fontSize="lg" 
                type="password"
                fontFamily="Poppins_300Light"
                placeholder="Password"
                onChangeText={password => setPassword(password)}
                value={password}
                bg='#e8e8e8' />
          </Box>
          <Box mt={5}>
            <Input
                borderRadius='full' 
                fontSize="lg" 
                type="password"
                fontFamily="Poppins_300Light"
                onChangeText={confirmepassword => setConfirmepasssword(confirmepassword)}
                value={confirmepassword}
                placeholder="Confirmer password"
                bg='#e8e8e8' />
          </Box>
          <VStack  space={2}  mt={5}>
            <Box mt={5}>
              <BoutonBg texte="S'inscrire" onPress={saveUser} />
            </Box>
          </VStack>
          <Center my={5}>
              <Texte texte={<>Vous avez dejà un compte ? <Text color="#ff0000" onPress={() => navigation.navigate('LoginScreen')}>Se connecter</Text></>} />
          </Center>
          
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
