import React from "react"
import {Text} from "native-base"

export default function Texte(props) {
  return (
    <Text fontSize="sm" fontFamily="Poppins_400Regular" color="#333" onPress={props.onPress}>{props.texte}</Text>
  )
}