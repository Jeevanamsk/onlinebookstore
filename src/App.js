import React from 'react';
import Navbar from './Components/Navbar.js';
import BookList from './Components/Booklist.js';
import BookDeatail from "./Components/BookDetail.js"
// import "./App.css"


function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <Navbar />
     <BookDeatail/>
      <h1 color='white'>More Books</h1>
      <BookList />
    
    </div>
  );
}

export default App;
