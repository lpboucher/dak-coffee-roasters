const orderValidation = values => {
  const errors = {}

  if (!values.shipping || !values.shipping.address || !values.shipping.address.name) {
    if (!errors.shipping) {
      errors.shipping = {}
      errors.shipping.address = {}
    }

    errors.shipping.address.name = 'Required'
  }

  if (!values.shipping || !values.shipping.address || values.shipping.address.name.split(' ').length < 2) {
    if (!errors.shipping) {
      errors.shipping = {}
      errors.shipping.address = {}
    }

    errors.shipping.address.name = 'Please provide full name'
  }

  if (!values.shipping || !values.shipping.address || !values.shipping.address.line1) {
    if (!errors.shipping) {
      errors.shipping = {}
      errors.shipping.address = {}
    }

    errors.shipping.address.line1 = 'Required'
  }

  if (!values.shipping || !values.shipping.address || !values.shipping.address.city) {
    if (!errors.shipping) {
      errors.shipping = {}
      errors.shipping.address = {}
    }

    errors.shipping.address.city = 'Required'
  }

  if (!values.shipping || !values.shipping.address || !values.shipping.address.postal_code) {
    if (!errors.shipping) {
      errors.shipping = {}
      errors.shipping.address = {}
    }

    errors.shipping.address.postal_code = 'Required'
  }

  if (!values.shipping || !values.shipping.address || !values.shipping.address.country) {
    if (!errors.shipping) {
      errors.shipping = {}
      errors.shipping.address = {}
    }

    errors.shipping.address.country = 'Required'
  }

  return errors
}

export default orderValidation