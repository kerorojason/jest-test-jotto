import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord, resetGame } from './actions';

export class NewWordButton extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.getSecretWord();
    this.props.resetGame();
  };
  render() {
    const style = {
      display: this.props.success ? 'block' : 'none'
    };
    return (
      <button
        data-test='new-word-button'
        style={style}
        className='btn btn-secondary my-2'
        onClick={this.handleClick}
      >
        New Word
      </button>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};
export default connect(mapStateToProps, { getSecretWord, resetGame })(NewWordButton);
