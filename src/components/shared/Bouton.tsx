import React from "react"
import {Button} from "native-base"

export default function Bouton(props:any) {
  return (
    <Button 
    _text={{ color: "#ef7914" }}
    size="lg"
    borderRadius="full"
    onPress={props.onPress}>{props.texte}</Button>
  )
}