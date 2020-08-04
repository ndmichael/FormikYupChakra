import React from 'react'
import { useFormik } from 'formik'
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

function StudentForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('Visited Fields ', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="lastname">LastName: </label>
                    <input type="text" id="lastname" name="lastname" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname} />
                    {formik.touched.lastname && formik.errors.lastname ? <div className="error"><p>{formik.errors.lastname}</p></div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="firstname">FirstName: </label>
                    <input type="text" id="firstname" name="firstname" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname} />
                    {formik.touched.firstname && formik.errors.firstname ? <div className="error">{formik.errors.firstname}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="dob">Gate Of Birth: </label>
                    <input type="date" id="dob" name="dob" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.dob} />
                    {formik.touched.dob && formik.errors.dob ? <div className="error">{formik.errors.dob}</div> : null}
                </div>  

                <div className="form-control">
                    <label htmlFor="gender">Gender: </label>
                    <input type="radio" id="gender" name="gender" value="male" />
                    <input type="radio" id="gender" name="gender" value="female" />
                    <input type="radio" id="gender" name="gender" value="other" />
                </div>
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StudentForm
