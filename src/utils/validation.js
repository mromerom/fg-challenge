export const validateName = (values, errors) => {
  // valid first name examples:
  // Juan Ignacio
  // Jean-Luc
  // T'Challa
  // Chloë
  const regex = /([A-zÀ-ž]+(?:[ '-][A-zÀ-ž]+){1,25})/g

    if (!values.firstName.trim()) {
      errors.firstName = 'Please provide your first name.'
    } else if (regex.test(!values.firstName)) {
      errors.firstName = 'First names can only contain letters, hyphens, apostrophes, spaces, and 25 characters total.'
    }

    // return errors
}

export const validateEmail = (values, errors) => {
  // Willful violation of RFC 5322 to accept addresses valid in real-world use
  // For more info: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address 
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


  if (!values.email) {
    errors.email = 'Please provide an email address.'
  } else if (regex.test(!values.email)) {
    errors.email = 'Please provide a valid email address.'
  }

  // return errors
}

export const validatePassword = (values, errors) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/i

  if (!values.password) {
    errors.password = 'Please create a password.'
  } else if (!regex.test(values.password)) {
    errors.password = 'Password must contain at least eight characters (and 64 max), one uppercase letter, one lowercase letter, one digit, and one special character.'
  }

  // return errors
}

export const validateFields = (values) => {
  let errors = {}

  validateName(values, errors)
  validateEmail(values, errors)
  validatePassword(values, errors)
  
  return errors
}