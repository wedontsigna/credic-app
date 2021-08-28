import React from "react"
import {Input,FormControl} from "native-base"

export default function OurInputs(props:any) {
  return (
    <FormControl >
     
        <Input
            borderRadius='full' 
            fontSize="lg" 
            type={props.type}
            fontFamily="Poppins_300Light"
            placeholder={props.placeholder} 
            bg='#e8e8e8' />
            
    </FormControl>
  )
}