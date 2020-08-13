import React from 'react'
import { Radio, RadioGroup, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/core'

function Testing() {
    return (

        <FormControl>
            <FormLabel>
                <RadioGroup>
                    
                    <Radio value="1">First</Radio>
                    <Radio value="2">Second</Radio>
                    <Radio value="3">Third</Radio>
                    
                </RadioGroup>
            </FormLabel>
            
        </FormControl>
    )
}

export default Testing
