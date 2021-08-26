import React from "react"
import {Text} from "native-base"

export default function Titre(props) {
  return (
    <Text fontSize="2xl">{props.texte}</Text>
  )
}