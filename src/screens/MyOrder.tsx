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

export default function MyOrder({navigation}: {navigation: any}) {

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
            <Titre  texte="My Order" />
            </Heading>
                <Stack space={3} alignItems="center" h="180px" bg="#f6f6f6" p={5} my={5}>
                {/* <Heading>HStack</Heading> */}
                <HStack space={3} alignItems="center">
                    <Center
                    size={16}
                    w="40%"                 
                    >
                        <Box shadow={2}
                            mt={"5"}
                            
                            h="100px"
                            w="100px">
                            <Image rounded="xl" source={require("../../assets/Food4.jpg")} alt="logo" w={'150px'} h='150px' />
                        </Box>
                    </Center>
                    <Box
                        size={16}
                        rounded="md"
                        w="60%"
                        >
                        <Text fontSize="xl" fontFamily="Poppins_700Bold">King burgers</Text>
                        <Texte texte="124 ratings" />
                        <Texte texte="Burger. Western Food" />
                        <Texte texte="N° 03.4th Lane,network" />
                    </Box>
                        
                </HStack>
            </Stack>
            
            <Box my={2} pt={2} px={2} bg="#f6f6f6">
                <Stack pt={4} h="60px">
                    <HStack >
                        <Box
                        size={16}
                        w="80%"                 
                        >
                        <Texte texte="Beef Burger xl" /> 
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="20%"
                            
                            >
                            <Text textAlign="right" fontSize="xl" fontFamily="Poppins_700Bold">29$</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={2} pt={2} px={2} bg="#f6f6f6">
                <Stack pt={4} h="60px">
                    <HStack >
                        <Box
                        size={16}
                        w="80%"                 
                        >
                        <Texte texte="Beef Burger xl" /> 
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="20%"
                            
                            >
                            <Text fontSize="xl" textAlign="right" fontFamily="Poppins_700Bold">29$</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={2} pt={2} px={2} bg="#f6f6f6">
                <Stack pt={4} h="60px">
                    <HStack >
                        <Box
                        size={16}
                        w="80%"                 
                        >
                        <Texte texte="Beef Burger xl" /> 
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="20%"
                            
                            >
                            <Text fontSize="xl" textAlign="right" fontFamily="Poppins_700Bold">29$</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>

            <Box my={0} pt={2} px={2} bg="#fff">
                <Stack pt={4} h="50px">
                    <HStack >
                        <Box
                        size={16}
                        w="60%"                 
                        >
                            <Text fontSize="md" fontFamily="Poppins_700Bold">
                                Delivery instructions
                            </Text>
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="40%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">+ Add Notes</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={0} pt={2} px={2} bg="#fff">
                <Stack pt={4} h="50px">
                    <HStack >
                        <Box
                        size={16}
                        w="60%"                 
                        >
                            <Text fontSize="md" fontFamily="Poppins_700Bold">
                                Sub Total
                            </Text>
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="40%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">$29</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={0} pt={2} px={2} bg="#fff">
                <Stack pt={2} h="50px">
                    <HStack >
                        <Box
                        size={16}
                        w="60%"                 
                        >
                            <Text fontSize="md" fontFamily="Poppins_700Bold">
                                Delivery cost
                            </Text>
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="40%"
                            
                            >
                            <Text fontSize="md" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">$15</Text>

                        </Box>
                                    
                    </HStack>
                </Stack>
            </Box>
            <Box my={0} pt={2} px={2} bg="#fff">
                <Stack pt={2} h="50px">
                    <HStack >
                        <Box
                        size={16}
                        w="60%"                 
                        >
                            <Text fontSize="md" fontFamily="Poppins_700Bold">
                                Total
                            </Text>
                        </Box>
                        <Box
                            size={16}
                            rounded="md"
                            w="40%"
                            
                            >
                            <Text fontSize="2xl" textAlign="right" fontFamily="Poppins_700Bold" color="#ff0000">$72</Text>

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
