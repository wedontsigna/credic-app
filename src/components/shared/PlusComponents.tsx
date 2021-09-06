import { Center, HStack, Icon, Stack } from 'native-base'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import React from 'react'
import Texte from './Texte';

function PlusComponents(props:any) {
    return (
        <Stack space={3} alignItems="center" bg="#f6f6f6" p={2} mt={4}>
        {/* <Heading>HStack</Heading> */}
        <HStack space={3} alignItems="center">
            <Center
            size={16}
            rounded="full"
            bg="#ccc"
            float="left"                   
            >
                <Icon
                    mb={1}
                    as={<MaterialCommunityIcons name="account" />}
                    color="white"
                    size="md"
                />
            </Center>
            <Center
                size={16}
                rounded="md"
                w="80%"
                alignItems="initial"
                >
                <Texte texte={props.texte} onPress={props.onPress} />
            </Center>
                
            </HStack>
    </Stack>
    )
}

export default PlusComponents
