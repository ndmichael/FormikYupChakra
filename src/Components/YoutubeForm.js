import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

const savedValues = {
    name: 'micheal',
    email: 'micheal@gmail.com',
    channel: 'Michael show',
    comments: 'Welcome to my website',
    address: 'jay jay 23',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values, onSubmitProps )=> {
    console.log("Form Data", values);
    console.log('onsubmitprops', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm('')
}

// const validate = values => {
//     let errors = {}
//     if (!values.name) {
//         errors.name = 'required'
//     }
//     if (!values.email) {
//         errors.email = 'required'
//     }
//     if (!values.channel) {
//         errors.channel = 'required'
//         return errors
//     }
// }

const validationSchema = Yup.object({
    name: Yup.string().required('required!!!'),
    email: Yup.string().email("Invalid format!!!").required('required!!!'),
    channel: Yup.string().required('required!!!')

})
function YoutubeForm() {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}  enableReinitialize>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name"
                        name="name" />
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email"
                        name="email" />
                    <ErrorMessage name='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="Channel">Channel:</label>
                    <Field type="text" id="channel"
                        name="channel" />
                    <ErrorMessage name='channel'>
                        {
                            (errMsg) => {
                                return <div className="error">{errMsg}</div>
                            }
                        }
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="comment">comments: </label>
                    <Field as="textarea" id="comments" name="comments" />
                </div>

                <div className="form-control">
                    <label htmlFor="address">Address: </label>
                    <Field name="address">
                        {
                            (props) => {
                                const { field, form, meta } = props
                                return (
                                    <div>
                                        <input type="text" id="address"  {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )

                            }
                        }
                    </Field>

                    <div className="form-control">
                        <label htmlFor="facebook">Facebook Profile: </label>
                        <Field type="text" name="social.facebook" id="facebook" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="twitter">Twitter Profile: </label>
                        <Field type="text" name="social.twitter" id="twitter" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="primaryPh">Primary PhonE NO:: </label>
                        <Field type="text" name="phoneNumbers[0]" id="primaryPh" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="secondaryPh">Secondary Phone No: </label>
                        <Field type="text" name="phoneNumbers[1]" id="secondaryPh" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="primaryPh">List of Phone NO:: </label>
                        <FieldArray  name="phNumbers">
                            {
                                (fieldArrayProps) =>{
                                    const {form, remove, push} = fieldArrayProps
                                    const {values} = form
                                    const {phNumbers} = values
                                    console.log('fieldArrayProps' , fieldArrayProps)
                                    return (
                                        <div>
                                            {
                                                phNumbers.map((phNumber, index) => (
                                                    <div key={index}> 
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {
                                                            index  > 0 && (
                                                                <button type="submit" onClick={()=> remove(index)}>{''} - {''} </button>
                                                            )
                                                        }
                                                        
                                                        <button type="submit" onClick={()=> push('')}> {''} + {''}  </button>
                                                    </div>
                                                    
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            }
                        </FieldArray>
                    </div>

                   

                       
                    

                </div>
                <button type="submit" onClick={()=> setFormValues(savedValues)}>Load SaveData</button>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm