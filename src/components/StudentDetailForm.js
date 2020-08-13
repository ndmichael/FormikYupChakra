import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import {Button} from '@chakra-ui/core'


function StudentDetailForm() {

    const subjectOptions = [
        {key:'Choose a subject', value: ''},
        {key:'Math', value: 'math'},
        {key:'English', value: 'English'},
        {key:'Physics', value: 'Physics'}
    ]

    const genderOptions = [
        {key:'Male', value: 'male'},
        {key:'Female', value: 'Female'},
        {key:'Others', value: 'Others'}
    ]

    const checkboxOptions = [
        {key:'Option 1', value: 'cOption 1'},
        {key:'Option 2', value: 'cOption 2'},
        {key:'Option 3', value: 'cOption 3'}
    ]

    const initialValues = {
        firstname: '',
        bio: '',
        subject: '',
        gender: '',
        checkboxOptions: [],
        birthDate: null
    }
    const validationSchema = Yup.object({
        firstname: Yup.string().required('required'),
        bio: Yup.string().required('required'),
        subject: Yup.string().required('required'),
        gender: Yup.string().required('required'),
        checkboxOptions: Yup.array().required('required'),
        birthDate: Yup.date().required('required').nullable()
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
                        <FormikControl
                            control='chakraSelect'
                            label="Choose a Subject"
                            name="subject"
                            options ={subjectOptions}
                        />

                        <FormikControl
                            control='chakraRadio'
                            label="Gender"
                            name="gender"
                            options ={genderOptions}
                        />

                        <FormikControl
                            control='chakraCheckbox'
                            label="Checkbox Topics"
                            name="checkboxOptions"
                            options ={checkboxOptions}
                        />

                        <FormikControl
                            control='chakraDate'
                            label="Pick A Date"
                            name="birthDate"
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
