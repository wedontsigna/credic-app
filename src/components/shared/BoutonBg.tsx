import React from "react"
import {Button} from "native-base"

export default function BoutonBg(props) {
  return (
    <Button bg="#ef7914"
    _text={{ color: "white" }}
    size="lg"
    variant="rounded" onPress={props.onPress}>{props.texte}</Button>
  )
}