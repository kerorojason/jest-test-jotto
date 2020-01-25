import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import './App.css';
import { getSecretWord } from './actions';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProp = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProp, { getSecretWord })(App);
