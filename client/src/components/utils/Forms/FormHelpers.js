import React from 'react';
import { Field } from 'react-final-form';
import { FormField, TextInput, RadioButton, CheckBox, Select } from "grommet";

/*const Fields = ({names, subscription, fieldsState = {}, children, originalRender}) => {
    if (!names.length) {
      return (originalRender || children)(fieldsState);
    }
    const [name, ...rest] = names;
    return (
      <Field name={name} subscription={subscription}>
        {fieldState => (
          <Fields
            names={rest}
            subscription={subscription}
            originalRender={originalRender || children}
            fieldsState={{ ...fieldsState, [name]: fieldState }}
          />
        )}
      </Field>
    );
  };*/

/*export const WhenValid = ({ fieldNames, subscription, children }) => (
    <Fields names={fieldNames} subscription={subscription}>
        {fieldsState => (
            Object.values(fieldsState).every(field => field.meta.valid) ? children : null
            //Object.entries(fieldsState).map(field => <pre>{JSON.stringify(field, 0, 2)}</pre>)
        )}
    </Fields>
  )*/

export const TextInputAdapter = ({ input: {name, onChange, value, ...restInput}, meta, ...rest }) => (
    <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest} >
        <TextInput
        {...restInput}
        name={name}
        onChange={onChange}
        value={value}
        />
    </FormField>
)

export const RadioAdapter = ({ input: {checked, name, onChange, value, ...restInput}, meta, label,...rest }) => (
    <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest}>
        <RadioButton
        {...restInput}
        label={label}
        checked={checked}
        name={name}
        onChange={onChange}
        value={value}
        />
    </FormField>
)

export const CheckboxAdapter = ({ input: {checked, name, onChange, value, ...restInput}, meta, label,...rest }) => (
    <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest}>
        <CheckBox
        toggle
        {...restInput}
        label={label}
        checked={checked}
        name={name}
        onChange={onChange}
        />
    </FormField>
)

export const SelectAdapter = ({ input: {name, onChange, value, ...restInput}, options, meta, label, placeholder, ...rest }) => (
  <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest}>
      <Select
      {...restInput}
      placeholder={placeholder}
      label={label}
      name={name}
      onChange={({ option }) => onChange(option)}
      value={value}
      options={options}
      />
  </FormField>
)