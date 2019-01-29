import React from 'react';

class BookShelfChanger extends React.Component {
    moveBook = (event) => {
        this.props.moveBook(
           this.props.book,
          event.target.options[event.target.selectedIndex].value
        );        
    }
    render() {
        const { bookShelf } = this.props;
        
        return (
            <div className="book-shelf-changer">
                <select onChange={this.moveBook} value={bookShelf ? bookShelf : 'None'}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="None">None</option>
                </select>
            </div>
        );

    }
}

export default BookShelfChanger;
