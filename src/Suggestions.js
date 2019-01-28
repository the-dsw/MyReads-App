import React from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

const Suggestions = ({moveBook, results}) => {    
   
  const options = results.map(book => (
    <li key={book.id}>
        <Book 
            book={book}
            title={book.title}
            author={book.authors}
            url={book.imageLinks.thumbnail}
            moveBook={moveBook}/>
    </li>
  ))
    return options;
}

Suggestions.propTypes = {
    moveBook: PropTypes.func,
    results: PropTypes.array
};

export default Suggestions;