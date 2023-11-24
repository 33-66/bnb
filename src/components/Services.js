import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BookButton from './BookButton';

const Services = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://bnb-api-pkhn.onrender.com/Rooms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => setData(jsonData))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Data from JSON Server</h1>
      <SearchBar data={data} />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map(item => (
          <li key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <strong>Name:</strong> {item.name} <br />
            {item.image && (
              
              <img
                src={item.image}
                alt={item.name}
                style={{ 
                  maxHeight:"800px",
                  maxWidth:"800PX",
                  marginTop: '10px',
                  border: '1px solid #ddd', 
              
          
              }}
                
              />
            
            )}
                        <br />
            <strong>Bedroom:</strong> {item.Bedroom} <br />
            <strong>Bathrooms:</strong> {item.Bathrooms} <br />
            <strong>Address:</strong> {item.Adress} <br />
            <strong>Status:</strong> {item.Status} <br />
            <BookButton />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
