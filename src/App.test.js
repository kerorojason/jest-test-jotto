import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { storeFactory } from '../test/testUtils';
import { exportAllDeclaration } from '@babel/types';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('redux props', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    expect(wrapper.instance().props.success).toBe(success);
  });
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    expect(wrapper.instance().props.secretWord).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    expect(wrapper.instance().props.guessedWords).toEqual(guessedWords);
  });
  test('`guessWord` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
