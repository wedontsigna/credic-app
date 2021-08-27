import React from "react"
import {Text} from "native-base"

export default function Titre(props) {
  return (
    <Text fontSize="28px" fontWeight="600" fontFamily="Poppins_900Black" onPress={props.onPress}>{props.texte}</Text>
  )
}