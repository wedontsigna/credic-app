import React from "react"
import {Input,FormControl} from "native-base"

export default function OurInputs(props:any) {
  return (
    <FormControl >
     
        <Input
            borderRadius='full' 
            fontSize="xs" 
            placeholder={props.placeholder} 
            bg='#e8e8e8' />
            
    </FormControl>
  )
}