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

export default function Menu({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
        <Box mx={2}>
            <FormControl mt={5}>
                <Input borderRadius='full' fontSize="xs" placeholder="Recherche ici" bg='#f0f0f0' />
            </FormControl>
        </Box>
        <HStack alignItems="center" space={4} justifyContent="space-between" mx={2} my={4}>
            <HStack alignItems="center" w="35%">
                <Box width="100%" h="100vh" bg="red.500" borderTopRightRadius="50px" borderBottomRightRadius="50px">
                    
                </Box>
            </HStack>
            <HStack alignItems="center" w="65%" h="100vh">
                <Box width="100%" h="100vh">
                    <Box>
                        <RowMenu MyTop="20px" />
                    </Box>
                    <Box>
                        <RowMenu MyTop="120px" />
                    </Box>
                    <Box>
                        <RowMenu MyTop="220px" />
                    </Box>
                    <Box>
                        <RowMenu MyTop="320px" />
                    </Box>
                </Box>
            </HStack>
        </HStack>
    </NativeBaseProvider>
  );
}
