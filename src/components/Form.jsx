import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

const professions = ['Engineer', 'Doctor', 'Teacher', 'Artist', 'Other'];

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    cellphone: '',
    homePhone: '',
    address: '',
    profession: '',
    incomes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      cellphone: '',
      homePhone: '',
      address: '',
      profession: '',
      incomes: '',
    });
  };

  const handleCancel = () => {
    console.log('Form submission cancelled.');
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="First Name"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        placeholder="Enter first name"
        pattern="[A-Za-z]+"
      />
      <InputField
        label="Last Name"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        placeholder="Enter last name"
        pattern="[A-Za-z]+"
      />
      <InputField
        label="Birthday"
        type="date"
        value={formData.birthday}
        onChange={handleChange}
        name="birthday"
      />
      <SelectField
        label="Gender"
        value={formData.gender}
        onChange={handleChange}
        options={['Male', 'Female', 'Other']}
        name="gender"
      />
      <InputField
        label="Cellphone"
        type="text"
        value={formData.cellphone}
        onChange={handleChange}
        name="cellphone"
        placeholder="Enter cellphone"
        pattern="\d{8}"
      />
      <InputField
        label="Home Phone"
        type="text"
        value={formData.homePhone}
        onChange={handleChange}
        name="homePhone"
        placeholder="Enter home phone"
        pattern="\d{8}"
      />
      <InputField
        label="Address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        name="address"
        placeholder="Enter address"
      />
      <SelectField
        label="Profession"
        value={formData.profession}
        onChange={handleChange}
        options={professions}
        name="profession"
      />
      <InputField
        label="Incomes"
        type="text"
        value={formData.incomes}
        onChange={handleChange}
        name="incomes"
        placeholder="Enter incomes"
        pattern="^[A-Za-z0-9\s,.'-]{1,}$"
      />
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="button" onClick={handleReset}>Clear</button>
      </div>
    </form>
  );
};

export default Form;
