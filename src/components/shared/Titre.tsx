import React from "react"
import {Text} from "native-base"

export default function Titre(props:any) {
  return (
    <Text fontSize={28} textAlign={props.textAlign} fontWeight="600" fontFamily="Poppins_900Black" onPress={props.onPress}>{props.texte}</Text>
  )
}