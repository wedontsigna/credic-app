import React from "react"
import {Button} from "native-base"

export default function BoutonBg(props:any) {
  return (
    <Button bg="#ef7914"
    _text={{ color: "white" }}
    size="lg"
    borderRadius="full"
    onPress={props.onPress}>{props.texte}</Button>
  )
}