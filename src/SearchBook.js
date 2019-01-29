import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Suggestions from './Suggestions';

class SearchBook extends React.Component {
  state = {
    query: '', 
    searchBooks: [],
    error: ''
  }

  handleInputChange = (query) => {
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
        if(!searchBooks.error) {
          this.setState({
            searchBooks,
            error: ''
          });
        } else {
          this.setState({
            error: searchBooks.error
          });
        }
        
      })
  }

  
  render() {
    const { error, query } = this.state;
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
                onChange={(e) => this.handleInputChange(this.search.value)} />
            </form>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {error ? (
              <p style={{color: 'red'}}>{`Any Book with ${query}`}</p>
            ) : query && (<Suggestions moveBook={moveBook} results={this.state.searchBooks} />)}
          </ol>
        </div>
      </div>
    );
  }
}


export default SearchBook;

