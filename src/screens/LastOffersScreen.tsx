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

export default function LastOffersScreen({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
      <Box
        safeArea
        flex={1}
        p={2}
        w="100%"
      >
        
        <VStack space={2} mt={1} >
          <Text fontSize="xs" >
             Find discounts, Offers special
           </Text>
           <Button
                 onPress={() => navigation.navigate('PaymentDetailScreen')} 
                fontSize={'12'}
                w={'50%'}
                colorScheme="cyan" 
                bg="#fc6011" 
                borderRadius='full'  
                _text={{color: 'white' }}>         
                    Check Offers 
            </Button>
        </VStack>
         
        
            <Box shadow={2}
                mt={"5"}
                w={'100%'}>
                <Image source={require("../../assets/Food8.jpg")} alt="logo" width={'100%'} height={'220'} />
            </Box>
            <Box>
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Café de Noires{"\n"}
                    <Text color='#333' fontSize='12' mb={1}>
                    <Text color='#fc6011' bold fontSize={'11'}>49  </Text>
                        (124 ratings) Café Western Food
                    </Text>
                </Text>
            </Box>

            <Box shadow={2}
                mt={"5"}
                w={'100%'}>
                <Image source={require("../../assets/Food6.jpg")} alt="logo" width={'100%'} height={'220'} />
            </Box>
            <Box>
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Isso{"\n"}
                    <Text color='#333' fontSize='12' mb={1}>
                    <Text color='#fc6011' bold fontSize={'11'}>49  </Text>
                        (124 ratings) Café Western Food
                    </Text>
                </Text>
            </Box>

            <Box shadow={2}
                mt={"5"}
                w={'100%'}>
                <Image source={require("../../assets/Food5.jpg")} alt="logo" width={'100%'} height={'220'} />
            </Box>
            <Box>
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Café Beans{"\n"}
                    <Text color='#333' fontSize='12' mb={1}>
                    <Text color='#fc6011' bold fontSize={'11'}>49  </Text>
                        (124 ratings) Café Western Food
                    </Text>
                </Text>
            </Box>

            <Box shadow={2}
                mt={"5"}
                w={'100%'}>
                <Image source={require("../../assets/Food4.jpg")} alt="logo" width={'100%'} height={'220'} />
            </Box>
            <Box>
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]}>
               Café de la Gloire{"\n"}
                    <Text color='#333' fontSize='12' mb={1}>
                    <Text color='#fc6011' bold fontSize={'11'}>49  </Text>
                        (124 ratings) Café Western Food
                    </Text>
                </Text>
            </Box>
          
      </Box>
    </NativeBaseProvider>
  );
}
