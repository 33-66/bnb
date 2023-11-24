import React, { useState } from 'react';

function PostingForm() {
  const [inputData, setInputData] = useState({
    name: "",
    Image: null,
    Description: "",
    Adress: "",
    Bedrooms: 1,
    Beds: 1,
    Bathrooms: 1,
    status: "Choose",
    AOB: ""
  });

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setInputData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Assuming your JSON server is running on http://localhost:3000
    const apiUrl = 'https://bnb-api-pkhn.onrender.com/Rooms';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Property data submitted successfully');
          alert('Property data submitted successfully');
        } else {
          console.error('Failed to submit property data');
          alert('Failed to submit property data');
        }
      })
      .catch((error) => {
        console.error('Error submitting property data:', error);
        alert('Error submitting property data');
      });
  }

  return (
    <>
    <h1>POST YOUR PROPERTY</h1>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
           <strong>Name:</strong>            
            <input 
            type="text"
            name='name'
            placeholder='The name of ur BNB'
            value={inputData.name} 
            onChange={handleChange}
            required
            />
        </label>
         <label htmlFor="">
         <strong>image:</strong>
            <input 
            type="file"
            accept='image' 
            name='Image'
            onChange={handleChange}
            required
            />
        </label> 
        {
            inputData.Image &&(
                <div>
                    <h3>Image Preview</h3>
                    <img 
                    src={URL.createObjectURL(inputData.Image)}  
                    alt="selected" />
                </div>
            )
        }
        <label htmlFor="">
        <strong>Description:</strong>
            <input
             type="text" 
             name='Description'
             placeholder='Describe your bnbs'
             value={inputData.Description}
             onChange={handleChange}
             required
             />
        </label>
        <label htmlFor="">
        <strong>Address:</strong>
            <input 
            type="text" 
            name='Adress'
            placeholder='where in name is your bnb located'
            value={inputData.Adress}
            onChange={handleChange}
            required
            />
        </label>
        <label htmlFor="">
        <strong>Bedrooms:</strong>
            <input 
            type="number"
            name='Bedrooms' 
            placeholder='number of bedrooms'
            value={inputData.Bedrooms}
            onChange={handleChange}
            min={1}
            max={10}
            required
            />
        </label>
        <label htmlFor="">
        <strong>Beds:</strong>
            <input 
            type="number" 
            name='Beds'
            placeholder='number of beds available'
            value={inputData.Beds}
            onChange={handleChange}
            min={1}
            max={10}
            required
            />
        </label>
        <label htmlFor="">
        <strong>Bathrooms:</strong>
            <input 
            type="number" 
            name='Bathrooms'
            placeholder='number of Bathrooms'
            value={inputData.Bathrooms}
            onChange={handleChange}
            min={1}
            max={10}
            required
            />
        </label>
        <label htmlFor="status">
        <strong>Name:Status</strong>
          <select
            name="status"
            value={inputData.status}
            onChange={handleChange}
            required
          >
            <option value="choose">Choose</option>
            <option value="NotReserved">Not Reserved</option>
            <option value="Reserved">Reserved</option>
          </select>
        </label>
         <label htmlFor="">
         <strong>Tell us more:</strong>
            <input 
            type="text" 
            name='AOB'
            placeholder='Anything  That Makes Your BnB Good'
            value={inputData.AOB}
            onChange={handleChange}
            

            />
        </label>
      <button>post</button>
    </form>
    </>
  );
}

export default PostingForm;