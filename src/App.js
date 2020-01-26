import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import NewWordBurron from './NewWordButton';
import TotalGuesses from './TotalGuesses';
import './App.css';
import { getSecretWord, resetGame } from './actions';
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
        <NewWordBurron display={this.props.success} resetGame={this.props.resetGame} />
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

export default connect(mapStateToProp, { getSecretWord, resetGame })(UnconnectedApp);
