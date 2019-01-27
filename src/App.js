import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import SearchBook from './SearchBook';
import ListBooksContent from './ListBooksContent'
import BookShelf from './BookShelf'
import Book from './Book';
import OpenSearch from './OpenSearch';

class BooksApp extends React.Component {
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
 
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  render() {
    const { books } = this.state;
    console.log("books", books);
    
    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
                <ListBooksContent>
                  <BookShelf title="Currently Reading">
                    <ol className="books-grid">
                      {books.map((book) => (
                        book.shelf === 'currentlyReading' && (
                          <li key={book.id}>
                            <Book 
                              title={book.title}
                              author={book.authors[0]}
                              url={book.imageLinks.thumbnail}/>
                          </li>
                        )
                      ))}
                    </ol>
                  </BookShelf>
                  <BookShelf title="Want to Read">
                    <ol className="books-grid">
                      {books.map((book) => (
                        book.shelf === 'wantToRead' && (
                          <li key={book.id}>
                            <Book 
                              title={book.title}
                              author={book.authors[0]}
                              url={book.imageLinks.thumbnail}/>
                          </li>
                        )
                      ))}
                    </ol>
                  </BookShelf>
                  <BookShelf title="Read">
                    <ol className="books-grid">
                      {books.map((book) => (
                        book.shelf === 'read' && (
                          <li key={book.id}>
                            <Book 
                              title={book.title}
                              author={book.authors[0]}
                              url={book.imageLinks.thumbnail}/>
                          </li>
                          )
                        ))}
                      </ol>
                  </BookShelf>
              </ListBooksContent>
              <OpenSearch to="/search" className="open-search" text="Add a book"/> 
              </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
