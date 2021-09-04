import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box, NativeBaseProvider,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// Screen
import SignIn from "./src/screens/SignInScreen";
import ResetPassword from "./src/screens/ResetPassword";
import NewPassword from "./src/screens/NewPassword";
import LoginScreen from "./src/screens/LoginScreen";
import DessertScreen from './src/screens/DessertScreen';
import LastOffersScreen from "./src/screens/LastOffersScreen";
import SendOTP from "./src/screens/SendOTP";
import FastDelivery  from "./src/screens/FastDelivery";
import FindFood from "./src/screens/FindFood";
import GoodMorning from "./src/screens/GoodMorning";
import Slider from './src/screens/Caroussel';
import MySlider from "./src/screens/Caroussel";
import { Detail } from "./src/screens/Detail";
import Menu from "./src/screens/Menu";
// fin Screen--------------------

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import HomeScreen from "./src/screens/HomeScreen";
import theme from "./theme";
import ProfileScreen from "./src/screens/Profil";
import PlusCreen from "./src/screens/PlusScreen";
import PaymentDetailScreen from "./src/screens/PaymentDetail";
import Notification from "./src/screens/Notification";
import About from "./src/screens/About";
import Inbox  from "./src/screens/Inbox";
import MyOrder from "./src/screens/MyOrder";
import CheckOut from "./src/screens/CheckOut";
import { TestProvider } from "./src/Context/GlobalData";

const Stack = createNativeStackNavigator();


const App=() =>{

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  console.log(Stack);

  const transaction = {
    c_identifier:"papa et maman"
  }

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
          name="DessertScreen"
          component={DessertScreen}
          options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SendOTP"
            component={SendOTP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FindFood"
            component={FindFood}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FastDelivery"
            component={FastDelivery}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GoodMorning"
            component={GoodMorning}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LastOffersScreen"
            component={LastOffersScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="MySlider"
            component={MySlider}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="Profil"
            component={ProfileScreen}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="Plus"
            component={PlusCreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentDetailScreen"
            component={PaymentDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inbox"
            component={Inbox}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyOrder"
            component={MyOrder}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckOut"
            component={CheckOut}
            options={{ headerShown: false }}
          />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </ApolloProvider>
 
  );
}
}
export default App;