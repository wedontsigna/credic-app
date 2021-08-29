import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  Stack,
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
} from 'native-base';
import Titre from '../components/shared/Titre';
import Texte from '../components/shared/Texte';
import BoutonBg from '../components/shared/BoutonBg';
import Footer from '../components/shared/Footer';

export default function PaymentDetailScreen({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider >
        <Stack mt={5} pt={5} mx={2} bg="#fff"> 
            <Box
                mt={5}
               
                mx={2}
               >
                <Titre texte="Payment details" />
            </Box>
            <Box
                mb={5}
                mx={2}
               >
                <Text fontSize="xl" style={{fontFamily:"Poppins_600SemiBold" }}>Customize your payment method</Text>
            </Box>
            <Box
                pr={5}
                pl={5}
                shadow={9}
                w={'100%'}
                bg="#e7e5e4"
                mx={1}>
                <Box
                pt={5}
                pb={3}
                mb={3}
                borderWidth={1} 
                borderBottomColor='warmGray.400'
                borderColor='transparent'
                _text={{
                    fontSize:'lg',
                    fontWeight: "bold",
                    color: "black",
                }}>
                <Text bold fontSize="md">
                     Cash/Card on delivery 
                </Text>
                </Box>
                <Stack alignItems="center" bg="#e7e5e4" mt={4}>
                    <HStack space={3} alignItems="center" bg="#e7e5e4">
                        <Center
                        size={16}
                        w="60%"                   
                        >
                           <Text fontSize="md" color="#333">
                               VISA ************ 2187
                           </Text>
                        </Center>
                        <Center>
                            <Button 
                                bg="transparent"
                                border={2}
                                style={{borderColor:"#ef7914",borderStyle:"solid"}}
                                _text={{ color: "#ef7914" ,fontFamily:"Poppins_600SemiBold"}}
                                borderRadius="full"
                            >Delete card</Button>
                        </Center>
                            
                    </HStack>
                </Stack>
                
                <Box  pb={3}>      
                    <Text bold fontSize="md">
                    Other Methods 
                    </Text>
                </Box>
            </Box>
            <Box mt={5} pt={5}>
                <BoutonBg texte="+  Add Another Credit/Debit Card" />
            </Box>
        </Stack>
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