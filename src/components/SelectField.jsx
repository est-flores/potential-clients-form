import React from 'react';

const SelectField = ({ label, value, onChange, options }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={onChange} required>
      <option value="">Select...</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;