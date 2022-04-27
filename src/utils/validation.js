// export const validateName = (firstName, errors) => {
//   // valid first name examples:
//   // Juan Ignacio
//   // Jean-Luc
//   // T'Challa
//   // Chloë
//   const regex = /([A-zÀ-ž]+(?:[ '-][A-zÀ-ž]+)([^0-9]*){1,25})/

//     // if (!firstName) {
//     //   errors.firstName = 'Please provide your first name.'
//     // } else if (!regex.test(firstName)) {
//     //   errors.firstName = 'First names can only contain letters, hyphens, apostrophes, spaces, and 25 characters total.'
//     // }
//     // if (!regex.test(firstName)) {
//     //     errors.firstName = 'First names can only contain letters, hyphens, apostrophes, spaces, and 25 characters total.'
//     //   }

//     // return errors
// }

// export const validateEmail = (email, errors) => {
//   // Willful violation of RFC 5322 to accept addresses valid in real-world use
//   // For more info: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address 
//   const regex = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/


//   if (!email) {
//     errors.email = 'Please provide an email address.'
//   } else if (!regex.test(email)) {
//     errors.email = 'Please provide a valid email address.'
//   }

//   // return errors
// }

// export const validatePassword = (password, errors) => {
//   const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$!%*?&()\[\]{}`~\-\_=+'";:,<.>/?\\|]{8,64}/

//   if (!password) {
//     errors.password = 'Please create a password.'
//   } else if (!regex.test(password)) {
//     errors.password = 'Password must contain at least eight characters (and 64 max), one uppercase letter, one lowercase letter, one digit, and one special character.'
//   }

//   // return errors
// }

// export const validateFields = (firstName, email, password) => {
//   let errors = {}

//   validateName(firstName, errors)
//   validateEmail(email, errors)
//   validatePassword(password, errors)
  
//   return errors
// }


let constraints = {
  firstName: [
    /(([^0-9]*){1,25})$/,
    'First names can only contain letters, hyphens, apostrophes, spaces, and 25 characters total.'
  ],
  // Willful violation of RFC 5322 to accept addresses valid in real-world use
  // For more info: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
  email: [
    /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/,
    'Please provide a valid email address.'
  ],
  password: [
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$!%*?&()\[\]{}`~\-\_=+'";:,<.>/?\\|]{8,64}/,
    'Password must contain at least eight characters (and 64 max), one uppercase letter, one lowercase letter, one digit, and one special character.'
  ],
}

// let firstNameValue = document.getElementById('firstName').value
let firstNameInput = document.getElementById('firstName')
let firstNameConstraint = new RegExp(constraints.firstName[0], '')

// let emailValue = document.getElementById('email').value
let emailInput = document.getElementById('email')
let emailConstraint = new RegExp(constraints.email[0], '')

// let passwordValue = document.getElementById('password').value
let passwordInput = document.getElementById('password')
let passwordConstraint = new RegExp(constraints.password[0], '')

if (firstNameInput && !firstNameConstraint.test(firstNameInput.value)) {
  firstNameInput.setCustomValidity(constraints.firstName[1])
  // firstNameInput && firstNameInput.setCustomValidity(constraints.firstName[1])
}

if (emailInput && !emailConstraint.test(emailInput)) {
  emailInput.setCustomValidity(constraints.email[1])
}

if (passwordInput && !passwordConstraint.test(passwordInput)) {
  passwordInput.setCustomValidity(constraints.password[1])
}