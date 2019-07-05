import React from 'react';
import { Form } from 'react-final-form';

import SubscriptionSelect from './SubscriptionSelect';

const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
  }

const SubscriptionForm = () => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values, active }) => (
                <form onSubmit={handleSubmit}>
                    <SubscriptionSelect 
                        name="varieties"
                        placeholder="Number of varieties"
                        options={[1, 2]}/>
                    <SubscriptionSelect 
                        name="style"
                        placeholder="Roast Style"
                        options={["espresso", "filter"]}/>
                    <SubscriptionSelect 
                        name="quantity"
                        placeholder="Quantity"
                        options={['500g', '1kg']}/>
                    <button type="submit" disabled={submitting || pristine}>
                        Add to cart
                    </button>
                </form>
            )}
            />
    );
};

export default SubscriptionForm;