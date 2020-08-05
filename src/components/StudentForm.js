import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const initialValues = {
    lastname: 'Ukeje',
    firstname: '',
    email: '',
    dob: '',
    gender: ''
}

const validationSchema = Yup.object({
    lastname: Yup.string().required("lastname required"),
    firstname: Yup.string().required('Firstname Required'),
    email: Yup.string().required('email required').email('Invalid email formaat'),
    dob: Yup.string().required('required')
})

const onSubmit = values => {
    console.log('Form Values ', values)
}

/*******
 *  Formik component: Replaced the useFormik hook with the Formik helper higher order component
 *  Form component: Replaced the form jsx with Form component provided by Formik,
 *                  no need to call the onSubmit props
 *  Field Component: replaces the inpux html tag
 *******/

function StudentForm() {
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })

    // console.log('Visited Fields ', formik.touched)

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="lastname">LastName: </label>
                    <Field type="text" id="lastname" name="lastname" />
                    <ErrorMessage name ="lastname" />
                </div>

                <div className="form-control">
                    <label htmlFor="firstname">FirstName: </label>
                    <Field type="text" id="firstname" name="firstname" />
                    <ErrorMessage name="firstname" />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <Field type="text" id="email" name="email" />
                    <ErrorMessage name="email" />
                </div>

                <div className="form-control">
                    <label htmlFor="dob">Gate Of Birth: </label>
                    <Field type="date" id="dob" name="dob"  />
                    <ErrorMessage name="dob" />
                </div>  

                <div className="form-control">
                    <label htmlFor="gender">Gender: </label>
                    <input type="radio" id="gender" name="gender" value="male" />
                    <input type="radio" id="gender" name="gender" value="female" />
                    <input type="radio" id="gender" name="gender" value="other" />
                </div>
                <br /> <br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default StudentForm
