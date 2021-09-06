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
import { ScrollView } from 'native-base';

export default function PaymentDetailScreen({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider >
        <ScrollView
        safeArea
        flex={1}
        w="100%"
        bg="#fff"  
        pt={2}      
      >
        <Stack pt={5}  bg="#fff" px={2}> 
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
                <Text fontSize="sm" style={{fontFamily:"Poppins_600SemiBold" }}>Customize your payment method</Text>
            </Box>

            <Box bg="#e7e5e4" h="150px" p={2}>
                <Box
                borderWidth={1} 
                bg="#e7e5e4" 
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
                        w="50%"                   
                        >
                           <Text fontSize="md" color="#333">
                               VISA ******* 2187
                           </Text>
                        </Center>
                        <Center>
                            <Button 
                                bg="transparent"
                                size="sm"
                                border={2}
                                style={{borderColor:"#ef7914",borderStyle:"solid"}}
                                _text={{ color: "#ef7914" ,fontFamily:"Poppins_600SemiBold"}}
                                borderRadius="full"
                            >Delete card</Button>
                        </Center>
                            
                    </HStack>
                </Stack>
                
                <Box  pb={3}>      
                    <Text bold size="md" >
                        Other Methods 
                    </Text>
                </Box>
            </Box>
            <Box mt={5} pt={5}>
                <BoutonBg size="sm" texte="+  Add Another Credit/Debit Card" />
            </Box>
        </Stack>
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