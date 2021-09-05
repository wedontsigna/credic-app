import React from 'react';

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
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { shadow } from 'styled-system';

export default function Footer(props:any) {
  const [selected, setSelected] = React.useState(1);

  return (
       <Box flex={1} bg="#fafafa" shadow={5} style={styles.footer} safeAreaTop>
       
        <HStack alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={props.onPress1}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="menu" />}
                color="#333"
                size="xs"
              />

              <Text color="#333" fontSize={14}>Menu</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={props.onPress2}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="heart" />}
                color="#333"
                size="xs"
              />

              <Text color="#333" fontSize={14}>Offres</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={props.onPress3}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="home" />}
                color="#333"
                size="xs"
              />

              <Text color="#333" fontSize={14}>Accueil</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={props.onPress4}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="account" />}
                color="#333"
                size="xs"
              />

              <Text color="#333" fontSize={14}>Profil</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={props.onPress5}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="menu" />}
                color="#333"
                size="xs"
              />

              <Text color="#333" fontSize={14}>Plus</Text>
            </Center>
          </Pressable>
          
        </HStack>
      </Box>
  );
}


var styles = StyleSheet.create({
footer: {
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    alignSelf:"flex-end",
    }
});