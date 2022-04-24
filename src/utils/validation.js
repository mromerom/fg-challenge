let errors = {}

export const validateName = (values) => {
  // valid first name examples:
  // Juan Ignacio
  // Jean-Luc
  // T'Challa
  // Chloë
  const regex = /([A-zÀ-ž]+(?:[ '-][A-zÀ-ž]+){1,25})/g

    if (values.firstName.trim()) {
      errors.firstName = 'Please provide your first name.'
    } else if (!regex.test(values.firstName)) {
      errors.firstName = `First names can only contain:
        \s• letters
        \s• hyphens
        \s• apostrophes
        \s• spaces
        \s• 25 characters total.`
    }
}

export const validateEmail = (values) => {
  // Willful violation of RFC 5322 to accept addresses valid in real-world use
  // For more info: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address 
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


  if (!values.email) {
    errors.email = 'Please provide an email address.'
  } else if (!regex.test(values.email)) {
    errors.email = 'Please provide a valid email address.'
  }
}

export const validatePassword = (values) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/i

  if (!values.password) {
    errors.password = 'Please create a password.'
  } else if (!regex.test(values.password)) {
    errors.password = `Password must contain at least:
      \s• eight characters (and 64 max)
      \s• one uppercase letter
      \s• one lowercase letter
      \s• one digit
      \s• and one special character.`
  }
}