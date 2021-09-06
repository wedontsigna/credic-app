import React from "react"
import {Button} from "native-base"

export default function BoutonBg(props:any) {
  return (
    <Button style={{backgroundColor:"#ef7914"}}
    _text={{ color: "white",fontFamily:"Poppins_600SemiBold" }}
    size={props.size}
    w="100%"
    borderRadius="full"
    onPress={props.onPress}>{props.texte}</Button>
  )
}