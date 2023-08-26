import React, { useState, useEffect } from 'react';
import './Booklist.css'; // Create and link your CSS file for styling

const App = () => {
  const [harryPotterBooks, setHarryPotterBooks] = useState([]);
  const [sherlockHolmesBooks, setSherlockHolmesBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async (query, setState) => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();
        setState(data.items || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks('harry+potter', setHarryPotterBooks);
    fetchBooks('sherlock+holmes', setSherlockHolmesBooks);
  }, []);

  return (
    <div className="app">
      <div className="books-row">
        {harryPotterBooks.map((book, index) => (
          <div className="book" key={index}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={`Book ${index}`} />
          </div>
        ))}
      </div><br/>
      <div className="books-row">
        {sherlockHolmesBooks.map((book, index) => (
          <div className="book" key={index}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={`Book ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
