import React, { useState, useEffect } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/reviews';

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch reviews');
        }
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.name}:</strong> {review.review}
            </li>
          ))}
        </ul>
      ) : (
        <h2>No more reviews available</h2>
      )}
    </div>
  );
};

export default ReviewList;