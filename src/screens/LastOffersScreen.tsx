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
import Bouton from '../components/shared/Bouton';
import BoutonBg from '../components/shared/BoutonBg';
import Texte from '../components/shared/Texte';
import Titre from '../components/shared/Titre';
import Footer from '../components/shared/Footer';

export default function LastOffersScreen({navigation}: {navigation: any}) {

 return (
      <NativeBaseProvider>
        <ScrollView
        safeArea
        px={2}
        flex={1}
        w="100%"
        mx='auto'
        bg="#fff"        
      >
      <Box
        safeArea
        flex={1}
        w="100%"
      >
        <Heading mt={5} mx={2}>
            <Titre  texte="Dernières offres" />
        </Heading>
        <VStack space={2} mt={1} >
            <Texte texte="Trouvez les reductions,les offres" />
            <BoutonBg texte="Check Offers " />
        </VStack>
        <Box shadow={2}
            mt={"5"}
            w={'100%'}>
            <Image source={require("../../assets/Food8.jpg")} alt="logo" width={'100%'} height={'220'} />
        </Box>
            <Box>
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]} onPress={() => navigation.navigate('Detail')}>
               Café de Noires{"\n"}
                    <Text color='#333' mb={1}>
                        <Text color='#fc6011' bold >49  </Text>
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
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]} onPress={() => navigation.navigate('Detail')}>
               Isso{"\n"}
                    <Text color='#333'  mb={1}>
                    <Text color='#fc6011' bold >49  </Text>
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
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]} onPress={() => navigation.navigate('Detail')}>
               Café Beans{"\n"}
                    <Text color='#333' mb={1}>
                    <Text color='#fc6011' bold >49  </Text>
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
                <Text bold  color='black' fontWeight={100} bottom={0} m={[4, 4, 8]} onPress={() => navigation.navigate('Detail')}>
               Café de la Gloire{"\n"}
                    <Text color='#333' mb={1}>
                    <Text color='#fc6011' bold >49  </Text>
                        (124 ratings) Café Western Food
                    </Text>
                </Text>
            </Box>
          
      </Box>
      </ScrollView>
      <Footer 
      onPress1={() => navigation.navigate('Menu')}
      onPress2={() => navigation.navigate('LastOffersScreen')}
      onPress3={() => navigation.navigate('GoodMorning')}
      onPress4={() => navigation.navigate('Profil')}
      onPress5={() => navigation.navigate('Plus')}
      
      />
    </NativeBaseProvider>
  );
}
