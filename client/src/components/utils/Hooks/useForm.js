import React, {useState} from 'react';

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleSubmit = (event) => { 
    if (event) {
        event.preventDefault();
    }
        callback();
    }
    
    const handleChange = (event) => {
    if (event) {
        event.persist();
    }
      setValues(values => ({...values, [event.target.name]: event.target.value}));
    }
    
  return {
      handleSubmit,
      handleChange,
      values
    };
  }

  export default useForm;