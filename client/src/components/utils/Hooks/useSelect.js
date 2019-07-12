import React, {useState} from 'react';

const useSelect = (callback) => {
    const [selections, setSelections] = useState({});

    const handleSelect = (event) => { 
    if (event) {
        event.preventDefault();
    }
        callback();
    }
    
    const handleChange = (event) => {
        setSelections(values => ({...values, [event.target.name]: event.value }));
    }
    
  return {
      handleSelect,
      handleChange,
      selections
    };
  }

  export default useSelect;