// import React from 'react'
// import { FormFields } from '../components/form-fields'

// export const FormFieldsContext = React.createContext()

// // export const useInput = (callback, validate) => {
// export const useInput = (callback, validate, props) => {
//   const { children } = props

//   const [values, setValues] = React.useState({
//     firstName: '',
//     email: '',
//     password: '',
//   })

//   const [errors, setErrors] = React.useState({})
//   const [submission, setSubmission] = React.useState(false)

//   const handleChange = event => {
//     const { name, value } = event.target

//     setValues({
//       ...values,
//       [name]: value
//     })
//   }

//   const handleSubmit = event => {
//     event.preventDefault()

//     setErrors(validate(values))
//     setSubmission(true)
//   }

//   React.useEffect(() => {
//     // if there are no errors and we submit, revalidate inputs
//     if (Object.keys(errors).length === 0 && submission) {
//       callback()
//     }
//   }, [errors, callback, submission])

//   const stateValues = { errors, handleChange, handleSubmit, values }

//   return (
//     <FormFieldsContext.Provider values={stateValues}>
//       {children}
//     </FormFieldsContext.Provider>
//   )
// }