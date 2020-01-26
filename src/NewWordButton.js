import React from 'react';
import { connect } from 'react-redux';

import { getSecretWord } from './actions';

const NewWordButton = props => {
  const style = {
    display: props.display ? 'block' : 'none'
  };
  return (
    <button
      data-test='new-word'
      onClick={props.resetGame}
      className='btn btn-secondary my-2'
      display={props.display ? 'block' : 'none'}
      style={style}
    >
      New Word
    </button>
  );
};

export default NewWordButton;
