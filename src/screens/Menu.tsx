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
import { RowMenu } from '../components/RowMenu';
import Titre from '../components/shared/Titre';
import OurInputs from '../components/shared/OurInput';

export default function Menu({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
    
        <Box bg="#fff" h="100%" flex={1}>
            <Heading mt={5} mx={2}>
                <Titre  texte="Menu" />
            </Heading>
            <Box mx={2} bg="#fff" mt={5}>
                    <OurInputs placeholder="Recherchez la nourriture" />
            </Box>
            <HStack h="100%">
                <HStack alignItems="center" borderTopRightRadius="50px" borderBottomRightRadius="50px" bg="red.500" h="100%" space={4} w="30%" flex={1} mt="10%">
                    <Box  h="100%"  >
                        
                    </Box>
                </HStack>
                <HStack alignItems="center" w="70%" h="100%" pt={5}>
                    <Box w="100%" h="100%" position="relative" right="0px" top="50px">
                        <Box w="100%">
                            <RowMenu MyTop="20px" texte="Nourritures" />
                        </Box>
                        <Box  w="100%">
                            <RowMenu MyTop="70px" texte="Breuvages" />
                        </Box>
                        <Box  w="100%">
                            <RowMenu MyTop="120px" texte="Desserts" onPress={() => navigation.navigate('DessertScreen')} />
                        </Box>
                        <Box  w="100%">
                            <RowMenu MyTop="170px" texte="Promotions" />
                        </Box>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    </NativeBaseProvider>
  );
}
