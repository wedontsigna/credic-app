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
  Stack,
} from 'native-base';
import Bouton from '../components/shared/Bouton';
import BoutonBg from '../components/shared/BoutonBg';
import Texte from '../components/shared/Texte';
import Titre from '../components/shared/Titre';
import Footer from '../components/shared/Footer';

export default function CheckOut({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
        <ScrollView
        safeArea
        px={2}
        flex={1}
        w="100%"
        mx='auto'
        bg="#fff" 
        mb='100px'       
      >
      <Box
        safeArea
        flex={1}
        w="100%"
      >
        <Heading mt={5} mx={2}>
            <Titre  texte="Checkout" />
            </Heading>
            <Box my={5}>
                <Texte texte="Delivery address" />
            </Box>
            <Box my={0} pt={2} px={2} bg="#fff">
                <Stack pt={4} >
                    <HStack >
                        <Box
                        size={16}
                        w="70%"                 
                        >
                            <Text fontSize="md" fontFamily="Poppins_700Bold">
                                653 Nostrand Ave,Broklyn,NY 11216
                            </Text>
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="30%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">Change</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={0} pt={2} px={2} h="50px" bg="#fff">
                <Stack pt={2} >
                    <HStack >
                        <Box
                        size={16}
                        w="50%"                 
                        >
                            <Text fontSize="md" fontFamily="Poppins_700Bold">
                                Payment method
                            </Text>
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="50%"
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">+ Add credit card</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={0} pt={2} px={2} bg="#f6f6f6" h="60px" rounded="xl">
                <Stack pt={2} >
                    <HStack >
                        <Box
                        size={16}
                        w="60%"                 
                        >
                            <Texte texte="Cash on delivery" />
                           
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="40%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">0</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={2} pt={2} px={2} bg="#f6f6f6" h="60px" rounded="xl">
                <Stack pt={2} >
                    <HStack >
                        <Box
                        size={16}
                        w="60%"                 
                        >
                            <Texte texte="VISA ************* 2212" />
                           
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="40%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">0</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={2} pt={2} px={2} bg="#f6f6f6" h="60px" rounded="xl">
                <Stack pt={2} >
                    <HStack >
                        <Box
                        size={16}
                        w="80%"                 
                        >
                            <Texte texte="PP wedoprofan@gmail.com" />
                           
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="20%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">0</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={5}>
                <BoutonBg texte="CheckOut" onPress={() => navigation.navigate('CheckOut')} />
                
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
