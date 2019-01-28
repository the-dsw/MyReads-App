import React from 'react';
import ListBooksContent from './ListBooksContent'
import BookShelf from './BookShelf'
import Book from './Book';
import OpenSearch from './OpenSearch';

class ListBooks extends React.Component {
    render () {
        const {books, moveBook} = this.props;

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
                <ListBooksContent>
                  <BookShelf title="Currently Reading">
                    {books.map((book) => (
                        book.shelf === 'currentlyReading' && (
                        <li key={book.id}>
                            <Book 
                            book={book}
                            moveBook={moveBook}
                            bookShelf= {book.shelf}
                            title={book.title}
                            author={book.authors}
                            url={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail}/>
                        </li>
                        )
                      ))}
                  </BookShelf>
                  <BookShelf title="Want to Read">
                    {books.map((book) => (
                        book.shelf === 'wantToRead' && (
                          <li key={book.id}>
                            <Book 
                              book={book}
                              moveBook={moveBook}
                              bookShelf= {book.shelf}
                              title={book.title}
                              author={book.authors}
                              url={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail}/>
                          </li>
                        )
                      ))}
                  </BookShelf>
                  <BookShelf title="Read">
                    {books.map((book) => (
                        book.shelf === 'read' && (
                          <li key={book.id}>
                            <Book 
                              book={book}
                              moveBook={moveBook}
                              bookShelf= {book.shelf}
                              title={book.title}
                              author={book.authors}
                              url={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : book.imageLinks.smallThumbnail}/>
                          </li>
                          )
                        ))} 
                  </BookShelf>
              </ListBooksContent>
              <OpenSearch to="/search" className="open-search" text="Add a book"/> 
              </div>
        );
    }
}

export default ListBooks;
