import React from "react"
import {Button} from "native-base"
import { fontFamily } from "styled-system"

export default function Bouton(props:any) {
  return (
    <Button 
    bg="transparent"
    border="2px solid #ef7914"
    _text={{ color: "#ef7914" ,fontFamily:"Poppins_600SemiBold"}}
    borderRadius="full"
    w="100%"
    onPress={props.onPress}>{props.texte}</Button>
  )
}