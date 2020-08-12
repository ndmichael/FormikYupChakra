import React from 'react'
import ChakraInput from './ChakraFormComponents/ChakraInput'
import ChakraTextarea from './ChakraFormComponents/ChakraTextarea'
import ChakraSelect from './ChakraFormComponents/ChakraSelect'
import ChakraRadio from './ChakraFormComponents/ChakraRadio'
import ChakraCheckbox from './ChakraFormComponents/ChakraCheckbox'
import ChakraDate from './ChakraFormComponents/ChakraDate'

function FormikControl(props) {
    const {control, ...rest} = props
    
    switch(control){
        case 'chakraInput':
            return <ChakraInput {...rest} />
        case 'chakraTextarea':
            return <ChakraTextarea {...rest} />
        case 'ChakraSelect':
            return <ChakraSelect {...rest} />
        case 'chakraRadio':
            return <ChakraRadio {...rest} />
        case 'chakraCheckbox':
            return <ChakraCheckbox {...rest} />
        case 'chakraDate':
            return <ChakraDate {...rest} />
         default:
            return null;
    }
}

export default FormikControl
