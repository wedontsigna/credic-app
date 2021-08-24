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

export default function DessertScreen({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
      >
        
        <VStack space={2} mt={0}>
          <FormControl mt={0}>
            <Input type="text" borderRadius='full' fontSize="xs" placeholder="Seach Food" bg='#f0f0f0' />
           </FormControl>
        </VStack>
         
        
            <Box shadow={2}
                mt={"5"}
                w='100%'>
        <Image source={require("../../assets/Dessert1.jpg")} alt="logo" width={'100%'} height={'270'} />
            <Text bold position='absolute'  color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Desserts 01{"\n"}
               <Text color='white' fontSize='12' mb={1}>
                 Minute by tuk tuk Desserts 01
               </Text>
            </Text>
            </Box>

            <Box shadow={2}
                mt={"1"}
                w='100%'>
        <Image source={require("../../assets/Dessert2.jpg")} alt="logo" width={'100%'} height={'270'} />
            <Text bold position='absolute'  color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Desserts 02 {"\n"}
               <Text color='white' fontSize='12' mb={1}>
                 Minute by tuk tuk Desserts 02
               </Text>
            </Text>
            </Box>

            <Box shadow={2}
                mt={"1"}
                w='100%'>
        <Image source={require("../../assets/Dessert3.jpg")} alt="logo" width={'100%'} height={'270'} />
            <Text bold position='absolute'  color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Desserts 03 {"\n"}
               <Text color='white' fontSize='12' mb={1}>
                 Minute by tuk tuk Desserts 03
               </Text>
            </Text>
            </Box>

            <Box shadow={2}
                mt={"1"}
                w='100%'>
        <Image source={require("../../assets/Dessert4.jpg")} alt="logo" width={'100%'} height={'270'} />
            <Text bold position='absolute'  color='white' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Desserts 04 {"\n"}
               <Text color='white' fontSize='12' mb={1}>
                 Minute by tuk tuk Desserts 04
               </Text>
            </Text>
            </Box>
          
      </Box>
    </NativeBaseProvider>
  );
}
