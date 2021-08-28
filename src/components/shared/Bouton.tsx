import React from "react"
import {Button} from "native-base"
import { borders, fontFamily } from "styled-system"

export default function Bouton(props:any) {
  return (
    <Button 
    bg="transparent"
    border={2}
    style={{borderColor:"#ef7914",borderStyle:"solid"}}
    _text={{ color: "#ef7914" ,fontFamily:"Poppins_600SemiBold"}}
    borderRadius="full"
    w="100%"
    onPress={props.onPress}>{props.texte}</Button>
  )
}