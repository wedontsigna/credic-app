import React from "react"
import { Box, FlatList, Center, NativeBaseProvider ,ScrollView, Heading,Text} from "native-base"
import Footer from "../components/shared/Footer"
import Titre from "../components/shared/Titre"
import Texte from "../components/shared/Texte"


 const Inbox = ({navigation}: {navigation: any}) => {

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ]
  return (
    <NativeBaseProvider>
    <ScrollView
       safeArea
       px={2}
       flex={1}
       w="100%"
       bg="#fff"  
       mt={5}      
     >
    <Heading mt={5} mx={2}>
        <Titre  texte="Inbox" />
    </Heading>
        <Box flex={1} mt={5} mx={2}>
            <Box bg="#f6f6f6" p={5}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
            </Box>
            <Box bg="#f6f6f6" p={5} mt={4}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
            </Box>
            <Box bg="#fafafa" p={5} mt={4}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
            </Box>
            <Box bg="#fafafa" p={5} mt={4}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
            </Box>
            <Box bg="#f6f6f6" p={5} mt={4}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
            </Box>
            <Box bg="#fafafa" p={5} mt={4}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
            </Box>
            <Box bg="#f6f6f6" p={5} mt={4}>
                <Texte texte="Your order are a been pickd"/>
                <Text color="#ccc">Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
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
  )
}
export default Inbox;