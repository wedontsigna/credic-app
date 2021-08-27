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
} from 'native-base';
import { RowMenu } from '../components/RowMenu';
import Titre from '../components/shared/Titre';
import OurInputs from '../components/shared/OurInput';

export default function Menu({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
        <Box bg="#fff" flex={1}>
            <Heading  color='#333' textAlign="center" my={5} fontWeight={100} >
              <Titre texte="Menu" />
               
            </Heading>
            <Box mx={2} bg="#fff" my={5}>
                    <OurInputs placeholder="Recherchez la nourriture" />
            </Box>
            <HStack alignItems="center" flex={1} bg="#fff" space={4} justifyContent="space-between" mx={2} mt="30%">
                <HStack alignItems="center" w="35%">
                    <Box width="100%" h="80vh" bg="red.500" borderTopRightRadius="50px" borderBottomRightRadius="50px">
                        
                    </Box>
                </HStack>
                <HStack alignItems="center" w="60%" h="100vh">
                    <Box width="100%" h="80vh">
                        <Box>
                            <RowMenu MyTop="20px" texte="Nourritures" />
                        </Box>
                        <Box>
                            <RowMenu MyTop="120px" texte="Breuvages" />
                        </Box>
                        <Box>
                            <RowMenu MyTop="220px" texte="Desserts" onPress={() => navigation.navigate('DessertScreen')} />
                        </Box>
                        <Box>
                            <RowMenu MyTop="320px" texte="Promotions" />
                        </Box>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    </NativeBaseProvider>
  );
}
