import React from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

const Suggestions = ({moveBook, results}) => (
    results.map(book => {
        if (book.imageLinks === undefined) { return null }
        return (
            <li key={book.id}>
                <Book 
                    book={book}
                    bookShelf= {book.shelf}
                    title={book.title}
                    author={book.authors}
                    url={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail}
                    moveBook={moveBook}/>
            </li>
        )
    })
);


Suggestions.propTypes = {
    moveBook: PropTypes.func,
    results: PropTypes.array
};

export default Suggestions;