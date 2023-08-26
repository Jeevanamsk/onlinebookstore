import React, { useState, useEffect } from 'react';
import "./BookDetail.css"

const BookDetail = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Fetch data from the API and set it to the cardData state
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="info-card">
      {cardData && (
        <div className="info-card-content">
          <div className="image-container">
            <img src={cardData.imageUrl} alt="Info" />
          </div>
          <div className="info-container">
            <h2>{cardData.title}</h2>
            <p>{cardData.description}</p>
            <button>{cardData.buttonText}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
