import React from 'react';
import ReactDOM from 'react-dom';

//{name} to match the name of the object you are importing
//importing data
import {books} from './books.js'

//import component
import Book from './Book.js'


//Css 
import './index.css';



function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //Passing book object with spead operator ...book
         return (<Book key={book.id} {...book}></Book>)

      })}
    </section> 
  );
}


ReactDOM.render(<BookList/>, document.getElementById('root'))