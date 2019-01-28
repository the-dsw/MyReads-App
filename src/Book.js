import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

const Book = ({title, author, url, bookShelf, moveBook, book }) => {      
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                <BookShelfChanger book={book} moveBook={moveBook} bookShelf={bookShelf} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    )
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.array,
    url: PropTypes.string.isRequired,
    bookShelf: PropTypes.string
}

export default Book;
