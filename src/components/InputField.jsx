import React from 'react';

const InputField = ({ label, value, onChange, type, placeholder, pattern, name }) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      name={name}
      required
    />
  </div>
);

export default InputField;
