import React from 'react';
import { Link } from 'react-router-dom';
import {debounce} from 'throttle-debounce';
import * as BooksAPI from './BooksAPI'
import Suggestions from './Suggestions';

class SearchBook extends React.Component {
  state = {
    query: '', 
    searchBooks: [],
    error: ''
  }

  componentWillMount() {
    debounce(500, this.handleInputChange);
  }

  handleInputChange = (query, e) => {
    e.persist();
    this.setState({
      query
    });
   
    if (query) {
      this.getSearchBooks(query);
    } else {
      this.cleanSearchBook();
    }
  }     
  
  cleanSearchBook = () => {
    this.setState({
      searchBooks: [],
      error: ''
    });
  }

  getSearchBooks = (query) => {
    BooksAPI.search(query)
      .then((searchBooks) => {
        BooksAPI.getAll()
          .then((currBooks) => {
            if(!searchBooks.error) {
              let books = searchBooks.map((sb) => {
                let currentBooksInShelves = currBooks.find((cb) => cb.id === sb.id );
                currentBooksInShelves ? (sb.shelf = currentBooksInShelves.shelf) : (sb.shelf = 'None');
                  
                return sb;
              })

              this.setState({
                searchBooks: books,
                error: '',
                query
              });
            } else {
              this.setState({
                error: searchBooks.error
              });
            }

          })
      })
      
  }

  
  render() {
    const { error, query, searchBooks } = this.state;
    const { moveBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <form>
              <input 
                type="text" 
                placeholder="Search by title or author"
                ref={input => this.search = input}
                onChange={(e) => this.handleInputChange(this.search.value, e)} />
            </form>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {error ? (
              <p style={{color: 'red'}}>{`Any Book with ${query}`}</p>
            ) : query && (<Suggestions moveBook={moveBook} results={searchBooks} />)}
          </ol>
        </div>
      </div>
    );
  }
}


export default SearchBook;

