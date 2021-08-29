import React from "react"
import { Box, FlatList, Center, NativeBaseProvider ,ScrollView, Heading} from "native-base"
import Footer from "../components/shared/Footer"
import Titre from "../components/shared/Titre"
import Texte from "../components/shared/Texte"


export const About = ({navigation}: {navigation: any}) => {
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
       pt={2}    
     >
    <Heading mt={5} mx={2}>
        <Titre  texte="About us" />
    </Heading>

        <Box flex={1} mt={5} mx={2}>
            <Box  p={5}>
                <Texte texte="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            </Box>
            <Box  p={5}>
                <Texte texte="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		  proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
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
export default About;