import isCreditCard from 'validator/lib/isCreditCard'
import isInt from 'validator/lib/isInt'

const paymentValidation = values => {
    const errors = {}
  
    if (!values.payment || !values.payment.name) {
        if (!errors.payment) {
          errors.payment = {}
        }
    
        errors.payment.name = 'Required'
      }
    
      if (!values.payment ||
        !values.payment.number ||
        (
          values.payment && values.payment.number &&!isCreditCard(values.payment.number)
      )) {
        if (!errors.payment) {
          errors.payment = {}
        }
    
        errors.payment.number = 'Provide a valid credit card'
      }

      if (!values.payment ||
        !values.payment.month ||
        (
        values.payment && values.payment.month && !isInt(values.payment.month, { min: 1, max: 12 })
      )) {
        if (!errors.payment) {
          errors.payment = {}
        }
    
        errors.payment.month = 'Provide a valid month'
      }

      if (!values.payment ||
        !values.payment.year ||
        (
        values.payment && values.payment.year && !isInt(values.payment.year)
      )) {
        if (!errors.payment) {
          errors.payment = {}
        }
    
        errors.payment.year = 'Provide a valid year'
      }

      if (!values.payment ||
        !values.payment.verification_value ||
        (
        values.payment && values.payment.verification_value && !isInt(values.payment.verification_value)
      )) {
        if (!errors.payment) {
          errors.payment = {}
        }
    
        errors.payment.verification_value = 'Provide a valid CVC'
      }
  
    return errors
  }
  
  export default paymentValidation