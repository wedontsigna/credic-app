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
  CheckIcon,
  Icon,
  IconButton,
  HStack,
  Divider,
  Center,
  Select
} from 'native-base';

export default function GoodMorning({navigation}: {navigation: any}) {

 return (
    <NativeBaseProvider>
    <Text fontSize="sm" color="#ccc"  mx={2} my="1">Delivering to</Text>
    <Center mx={2} my="1">
    <Select
      w="100%"
      border={0}
      accessibilityLabel="Select your favorite programming language"
      placeholder="Select your favorite programming language"
      onValueChange={(itemValue) => setLanguage(itemValue)}
      _selectedItem={{
        bg: "cyan.600",
        endIcon: <CheckIcon size={4} />,
      }}
    >
      <Select.Item label="JavaScript" value="js" />
      <Select.Item label="TypeScript" value="ts" />
      <Select.Item label="C" value="c" />
      <Select.Item label="Python" value="py" />
      <Select.Item label="Java" value="java" />
    </Select>
  </Center>
 <Center  mx={2} my="1">
  <Input
    w="100%"
   
    placeholder="Default Input"
    _light={{
      placeholderTextColor: "blueGray.400",
    }}
    _dark={{
      placeholderTextColor: "blueGray.50",
    }}
  />
 </Center>
  </NativeBaseProvider>
  );
}
