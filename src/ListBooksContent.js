import React from 'react';
import PropTypes from 'prop-types';


const ListBooksContent = ({children}) => {
    return (
        <div className="list-books-content">
            {children}
        </div>
        
    )
}

ListBooksContent.propTypes = {
    children: PropTypes.any.isRequired,
}
export default ListBooksContent;
