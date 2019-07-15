import IsEmail from 'validator/lib/isEmail'

const loginValidation = values => {
  const errors = {}

  if (
    !values.existing &&
    (!values.customer || !values.customer.name)
  ) {
    if (!errors.customer) {
      errors.customer = {}
    }

    errors.customer.name = 'Required'
  }

  if (!values.customer || !values.customer.email) {
    if (!errors.customer) {
      errors.customer = {}
    }

    errors.customer.email = 'Required'
  }

  if (
    values.customer &&
    values.customer.email &&
    !IsEmail(values.customer.email)
  ) {
    if (!errors.customer) {
      errors.customer = {}
    }

    errors.customer.email = 'Provide a valid email'
  }

  if (!values.customer || !values.customer.password) {
    if (!errors.customer) {
      errors.customer = {}
    }

    errors.customer.password = 'Required'
  }
  

  return errors
}

export default loginValidation