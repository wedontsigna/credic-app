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
import { RowMenu } from '../components/RowMenu';
import Titre from '../components/shared/Titre';
import OurInputs from '../components/shared/OurInput';
import Footer from '../components/shared/Footer';
import Texte from '../components/shared/Texte';
import PlusComponents from '../components/shared/PlusComponents';

export default function PlusCreen({navigation}: {navigation: any}) {

 return (
    <NativeBaseProvider>
         <ScrollView
        safeArea
        px={2}
        flex={1}
        w="100%"
        bg="#fff"  
        pt={2}      
      >
        <Heading mt={5} mx={2}>
            <Titre  texte="Plus" />
        </Heading>
        <PlusComponents texte="My order" onPress={() =>navigation.navigate('MyOrder')} />
        <PlusComponents texte="Payment details" onPress={() =>navigation.navigate('PaymentDetailScreen')}/>
        <PlusComponents texte="notifications" onPress={() =>navigation.navigate('Notification')}/>
        <PlusComponents texte="Inbox" onPress={() =>navigation.navigate('Inbox')}/>
        <PlusComponents texte="About us" onPress={() =>navigation.navigate('About')}/>

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
