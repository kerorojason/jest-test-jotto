import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class Input extends Component {
  state = {
    currentGuess: ''
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ currentGuess: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(this.state.currentGuess);
      this.setState({ currentGuess: '' });
    }
  };

  render() {
    const contents = this.props.success ? null : (
      <form data-test='form' className='form-inline' onSubmit={this.handleFormSubmit}>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='test'
          placeholder='enter guess'
          value={this.state.currentGuess}
          onChange={this.handleInputChange}
        />
        <button data-test='submit-button' type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);
