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
export const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )

export const TextInputAdapter = ({ input: {name, onChange, value, ...restInput}, meta, placeholder, ...rest }) => (
    <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest} >
        <TextInput
        {...restInput}
        placeholder={placeholder}
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
    
        <CheckBox
        toggle
        {...restInput}
        label={label}
        checked={checked}
        name={name}
        onChange={onChange}
        />
)

export const SelectAdapter = ({ input: {name, onChange, value, ...restInput}, options, margin, meta, label, placeholder, ...rest }) => (
  <FormField label={label} error={meta.modified && meta.error ? meta.error : ""} {...rest}>
      <Select
      {...restInput}
      placeholder={placeholder}
      name={name}
      onChange={({ option }) => onChange(option)}
      value={value}
      options={options}
      margin={margin}
      focusIndicator={false}
      />
  </FormField>
)