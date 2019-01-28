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

  handleInputChange = () => {
    this.setState(() => ({
      query: this.search.value
    }));
   
    if (this.state.query && this.state.query.length > 1) {
      this.getSearchBooks();
    }
  }     
 
  getSearchBooks = () => {
    BooksAPI.search(this.state.query)
      .then((searchBooks) => {
        if(!searchBooks.error) {
          this.setState(() => ({
            searchBooks,
            error: ''
          }));
        } else {
          this.setState(() => ({
            error: searchBooks.error
          }));
        }
        
      })
  }

  
  render() {
    const { error, query } = this.state;
    const { moveBook } = this.props;
  

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" onClick={() => (console.log("clicked"))} className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <form>
              <input 
                type="text" 
                placeholder="Search by title or author"
                ref={input => this.search = input}
                onChange={this.handleInputChange} />
            </form>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {error === 'empty query' ? (
              <p style={{color: 'red'}}>{`Any Book with ${query}`}</p>
            ) : (<Suggestions moveBook={moveBook} results={this.state.searchBooks} />)}
         
          </ol>
        </div>
      </div>
    );
  }
}


export default SearchBook;

