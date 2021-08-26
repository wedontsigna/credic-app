import React from "react"
import {Button} from "native-base"

export default function Bouton(props) {
  return (
    <Button 
    style={{backgroundColor:"#fff",border:"2px solid #ef7914"}}
    _text={{ color: "#ef7914" }}
    size="lg"
    variant="rounded" >{props.texte}</Button>
  )
}