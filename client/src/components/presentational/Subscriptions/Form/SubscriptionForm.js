import React, { Fragment } from 'react';

import useSelect from '../../../utils/Hooks/useSelect';

import {
    Box,
    Button,
    Select,
    Form,
    FormField,
  } from "grommet";

const SubscriptionForm = ({ type }) => {
    const addToCart = () => {
      console.log("Submit: ", selections);
    }

    const {selections, handleChange, handleSelect} = useSelect(addToCart);

    return (
    <Form onSubmit={handleSelect}>
        <Box pad="small">
            {type !== 'roaster-subscription' && 
            <Fragment>
                <FormField component={Select} options={['1', '2']} onChange={handleChange} value={selections.varieties || ''} name="varieties" placeholder="Number of varieties" required={true} size="small" />
                <FormField component={Select} options={['Espresso', 'Filter']} onChange={handleChange} value={selections.roast || ''} name="roast" placeholder="Roast Style" required={true} size="small" />
            </Fragment>
            }
            <FormField component={Select} options={['500g', '1kg']} onChange={handleChange} value={selections.quantity || ''} name="quantity" placeholder="Quantity" required={true} size="small" />
        </Box>
      
      <Button type="submit" label="Submit" primary color="mainDark" />
    </Form>
    )
};

export default SubscriptionForm;