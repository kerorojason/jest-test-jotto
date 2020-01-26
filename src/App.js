import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import TotalGuesses from './TotalGuesses';
import NewWordButton from './NewWordButton';
import './App.css';
import { getSecretWord } from './actions';
export class UnconnectedApp extends Component {
  componentDidMount = () => {
    this.props.getSecretWord();
  };
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <div>The random word is: {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <NewWordButton />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses totalGuesses={this.props.guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProp = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProp, { getSecretWord })(UnconnectedApp);
