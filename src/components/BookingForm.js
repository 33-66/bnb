import React, { useState } from 'react';
import './form.css';

function BookingForm() {
  const initialInputData={
    fullname: '',
    email: '',
    checkIndate: '',
    checkOutdate: '',
    numOfVisitors: 1,
    expectations: '',
  };
  const [inputData, setInput] =useState(initialInputData)
  function handleChange(e) {
    setInput({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  }

  function alertMe() {
    
    alert(`Thank you ${inputData.fullname} for choosing us hope we meet on ${inputData.checkIndate}`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setInput({
      ...inputData,
      [e.target.name]: e.target.value,
    });

    alert('Form submitted successfully');

    setTimeout(() => {
      alertMe();
      resetForm()
    }, 1000);
  }
function resetForm(){
  setInput(initialInputData)
}

  return (
    <>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" style={{ marginRight: '65px' }}>
          Full Name
          <input
            type="text"
            name='fullname'
            placeholder='input your full name'
            value={inputData.fullname}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="">
          Email
          <input
            type="text"
            name='email'
            placeholder='input email...'
            value={inputData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label htmlFor="" style={{ marginRight: '100px' }}>
          Check-in Date
          <input
            type="date"
            name='checkIndate'
            value={inputData.checkIndate}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="">
          Check-out Date
          <input
            type="date"
            name='checkOutdate'
            value={inputData.checkOutdate}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="" style={{ marginRight: '150px' }}>
          Number of Visitors
          <input
            type="number"
            name='numOfVisitors'
            value={inputData.numOfVisitors}
            onChange={handleChange}
            min={1}
            max={10}
            required
          />
        </label>
        <label htmlFor="" style={{ marginRight: '20px' }}>
          Expectations
          <input
            type="text"
            name='expectations'
            placeholder='write what you expect to be in your BnB'
            value={inputData.expectations}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit form</button>
      </form>
    </>
  );
}

export default BookingForm;
