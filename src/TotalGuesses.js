import React from 'react';
import PropTypes from 'prop-types';

const TotalGuesses = props => {
  return <h4 data-test='total-guesses'>Total Guesses:{props.totalGuesses}</h4>;
};

TotalGuesses.propTypes = {
  totalGuesses: PropTypes.number.isRequired
};

export default TotalGuesses;
