import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import {Button} from '@chakra-ui/core'


function StudentDetailForm() {

    const initialValues = {
        firstname: '',
        bio: ''
    }
    const validationSchema = Yup.object({
        firstname: Yup.string().required('required'),
        bio: Yup.string().required('required')
    })
    const onSubmit = (values) => {
        console.log('entered values ', values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control='chakraInput'
                            type='text'
                            label="my input 1"
                            name="firstname"
                        />
                        <FormikControl
                            control='chakraTextarea'
                            label="Biography"
                            name="bio"
                        />
                        <br />
                        <Button type="submit" disabled={!formik.isValid}>Submit</Button>
                    </Form>
                }
            }

        </Formik>
    )
}

export default StudentDetailForm
