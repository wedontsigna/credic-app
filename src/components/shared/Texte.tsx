import React from "react"
import {Text} from "native-base"

export default function Texte(props:any) {
  return (
    <Text fontSize="md" textAlign={props.textAlign}  style={{fontFamily:"Poppins_400Regular" }}  color="#333" onPress={props.onPress}>{props.texte}</Text>
  )
}