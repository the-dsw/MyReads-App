import React from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import SearchBook from './SearchBook';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResultBooks: [],
    query: '',
  }
  static propTypes = {
    books: PropTypes.array
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))        
      })
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((response) => {
          this.getBooks();
      }
    );
  }
 
  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" render={() => <SearchBook books={books} moveBook={this.moveBook}/>} />
        <Route exact path="/" render={() => (<ListBooks moveBook={this.moveBook} books={books}/>)} />
      </div>
    )
  }
}

export default BooksApp
