import React from 'react'
import { Form } from 'react-final-form'

import CheckoutGroup from './CheckoutGroup';

import { CHECKOUT } from '../../../constants/Fields';

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const CheckoutForm = () => (
    <Form
      onSubmit={onSubmit}
      //initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          {CHECKOUT.map(item =>
            <CheckoutGroup
              key={item.group.name}
              icon={item.group.icon}
              label={item.group.name}
              fields={item.fields}
            />
          )}
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
)

export default CheckoutForm;
