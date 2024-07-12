import React from 'react';

const InputField = ({ label, value, onChange, type, placeholder, pattern }) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      required
    />
  </div>
);

export default InputField;
