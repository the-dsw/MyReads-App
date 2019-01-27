import React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

const OpenSearch = ({ to, text, className }) => (
    <div className={className}>
        <Link to={to}>{text}</Link>
  </div>
);

OpenSearch.propTypes = {
    className: Proptypes.string.isRequired,
    to: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired
}
export default OpenSearch;
