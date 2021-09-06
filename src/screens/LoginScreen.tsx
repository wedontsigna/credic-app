import * as React from 'react';
import { VStack, 
    Button, 
    Text, 
    Input, 
    Box, 
    Center, 
    NativeBaseProvider, 
    FormControl } from "native-base";
import Titre from '../components/shared/Titre';
import Texte from '../components/shared/Texte';
import OurInputs from '../components/shared/OurInput';
import BoutonBg from '../components/shared/BoutonBg';
import { gql, useMutation, useQuery } from '@apollo/client'
import { useState } from 'react';

const LOGINMUTATION =gql`
  mutation LOGINMUTATION($identifier:String!,$password:String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
    }
  }`

  const LOGINQUERY=gql`
    query{
      clients
      {id}
    }
  `;
export default function LoginScreen({navigation}: {navigation: any}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [save, setSave] = useState(0);

  const inputs={
    identifier:email,
    password:password
  }

  const [login,{data}]=useMutation(LOGINMUTATION, {
    variables:inputs
  });
  const loginUser=()=>{

    const result=login();
    const promise = Promise.resolve(result);
      promise.then((valeur) => {

        if(valeur?.data?.login?.jwt)
        { 
          setSave(1);
          setEmail('');
          setPassword('');

          navigation.navigate('GoodMorning')
        }
      });
  }


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
  
  <VStack space={2} alignItems="center" mt={5}>
    <Titre texte="Se connecter" />
    <Texte texte="Entrez vos informations" color="muted.400" fontSize="xs" />
  </VStack>
   
    <VStack space={2}>
      <Box mt={5}>
          <Input
            borderRadius='full' 
            fontSize="lg" 
            type="email"
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
            type="password"
            fontFamily="Poppins_300Light"
            placeholder="Password"
            onChangeText={password => setPassword(password)}
            value={password}
            bg='#e8e8e8' />
      </Box>
      <Box mt={5}> 
        <BoutonBg texte="Se connecter" onPress={loginUser} />
      </Box>
    
    </VStack>

    <Center my={5}>
        <Texte texte="Mot de passe oublié ?" onPress={() => navigation.navigate('ResetPassword')} />
    </Center>  
    <Center my={5}>
        <Texte texte="Ou connectez vous avec ?" />
    </Center>

    <VStack space={1} mt={5}>
      <Button 
      onPress={() => navigation.navigate('GoodMorning')}
          w="100%"
        bg="#1877f2"
        borderRadius='full'  
        _text={{color: 'white' }}         
        shadow={2}
        size="lg"
       >         
        Se connecter avec facebook</Button>
    </VStack>

    <VStack space={1} mt={5}>
     <Button 
       w="100%"
       colorScheme="danger"
       bg="#cf3f32"
       
       borderRadius='full'  
       _text={{color: 'white' }}         
       shadow={2}
       size="lg"
       onPress={() => navigation.navigate('DessertScreen')}
       >         
             Se connecter avec Google
          </Button>
    </VStack>
       

    <Center mt={5}>
        <Texte texte={<>Vous n'avez pas de compte ? <Text color="#ff0000" onPress={() => navigation.navigate('SignIn')}>S'inscrire</Text></>} />
              
    </Center>
    </Box>
    </NativeBaseProvider>
  );
}
