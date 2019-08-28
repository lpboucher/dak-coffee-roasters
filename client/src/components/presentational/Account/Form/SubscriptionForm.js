import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next'
import { Form, Field } from 'react-final-form';

import { Condition, SelectAdapter } from '../../../utils/Forms/FormHelpers';

import { Box, Button } from "grommet";

const required = value => (value ? undefined : "Please select all options");

const SubscriptionForm = ({update, pause, cancel, id, itemId, plan, status, number, quantity, roast, varieties, t}) => {
    return (
        <Form
            onSubmit={values => update(id, itemId, values)}
            initialValues={{plan, number, quantity, roast, varieties}}
            render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
            <form onSubmit={handleSubmit}>
                <Box width="100%" pad={'medium'}> 
                <Fragment>
                    <Field
                        label="Subscription"
                        name="plan"
                        component={SelectAdapter}
                        size="small"
                        options={['classics', "roasters"]}
                        placeholder="Choose plan?"
                        validate={required}
                    />
                    <Field
                        label="How many?"
                        name="number"
                        component={SelectAdapter}
                        size="small"
                        options={['1', "2", '3', '4', '5']}
                        placeholder="How many?"
                        validate={required}
                    />
                    <Condition when="plan" is="classics">
                        <Field
                        label="Number of varieties"
                        name="varieties"
                        component={SelectAdapter}
                        size="small"
                        options={['1', '2']}
                        placeholder="How many varieties?"
                        validate={required}
                        />
                        <Field
                        label="Roast style"
                        name="roast"
                        component={SelectAdapter}
                        size="small"
                        options={['espresso', 'filter']}
                        placeholder="Espresso or Filter?"
                        validate={required}
                        />
                    </Condition>
                </Fragment>
                <Field label="Quantity" name="quantity" component={SelectAdapter} size="small" options={['500g', '1000g']} placeholder="How much?" validate={required}/>
                <Box width="100%" direction="row">
                    <Box width="50%" pad={{right: 'small'}}>
                        <Button onClick={() => pause(id, status === 'paused')} disabled={submitting || invalid} primary fill="horizontal" label={status === 'paused' ? t("reactivate") : t("pause")} color="mainDark" />
                    </Box>
                    <Box width="50%" pad={{left: 'small'}}>
                        <Button onClick={() => cancel(id)} disabled={status !== 'active'} primary fill="horizontal" label={t("cancel")} color="mainDark" />
                    </Box>
                </Box>
                <Button type="submit" disabled={status !== 'active' || submitting || invalid} primary fill="horizontal" label={t("sections.account.subscriptions.button")} color="mainDark" />
                </Box>
            </form>
            )}
        />
    );
};

export default withTranslation()(SubscriptionForm);