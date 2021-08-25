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

export default function PaymentDetailsScreen({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
        <Stack>
  <Box
    mb={5}
    borderWidth={1} 
    borderBottomColor='warmGray.400'
    borderColor='transparent'>
    <Text bold fontSize={11}
          mb={2}>
      Customise your payment methode
    </Text>
  </Box>
  <Box
    space={'2'}
    pr={5}
    pl={5}
    shadow={'9'}
    shadowOpacity={'1.5'}
    shadowRadius={'23.0'}
    shadowOffset={'1'}
    shadowOpacity={1.22}
    shadowRadius={67.22}
    elevation={6}
    w={'100%'}
    bg="#e7e5e4"
    direction={{
        base: "column",
        md: "row",
      }}
    space={1}
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
    <Text bold fontSize='12'>
      Cash/Card on delivery 
      </Text>
    </Box>
    <Flex
        pt={2}
        width="100%"
        direction={{
        base: "row",
        }}
        pb={3}
        mb={3}
        borderWidth={1} 
        borderBottomColor='warmGray.400'
        borderColor='transparent'
        justifyContent="space-between">
    <Text bold fontSize='12'
          mr={5}
          mb={'1'}>
      2341
      </Text>
    <Button
          w={'50%'}
          ml={'5'}
          size='xs'
          variant="outline"
          colorScheme="danger"
          borderRadius={30}
          onPress={() => console.log("hello world")}
        >
          Delete Card
        </Button>
    </Flex>
    
    <Box
        pb={3}>      
      
      <Text bold fontSize='12'>
      Other Methods 
      </Text>
    </Box>
  </Box>
  <Box
    pt={5}
    pr={3}
    pl={3}>
    <Button
      borderRadius={30}
      mt={5}
      colorScheme="orange"
        _text={{
          color: "white",
          fontSize:"12",
          fontWeight:"400"
        }}>
    +  Add Another Credit/Debit Card
    </Button>
  </Box>
 </Stack>
</NativeBaseProvider>
  );
}



