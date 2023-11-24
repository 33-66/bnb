import React, { useState } from 'react';
import ReviewList from './ReviewList';
//import Footer from './Footer';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    review: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const apiUrl = 'https://bnb-api-pkhn.onrender.com/Reviews';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Review submitted successfully');
          
          setFormData({
            name: '',
            review: '',
          });
        } else {
          console.error('Failed to submit review');
        }
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      })
      
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
          />
          
        </div>
        <button type='submit' >Submit Review</button>
      </form>
      <ReviewList />
  
    </div>
  );
};

export default ReviewForm;