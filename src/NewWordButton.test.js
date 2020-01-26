import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import ConnectedNewWordButton, { NewWordButton } from './NewWordButton';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ConnectedNewWordButton store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let component;
    beforeEach(() => {
      const initialState = { success: false };
      const wrapper = setup(initialState);
      component = findByTestAttr(wrapper, 'new-word-button');
    });
    test('renders without error', () => {
      expect(component.length).toBe(1);
    });
    test('display style is none', () => {
      expect(component.props().style).toHaveProperty('display', 'none');
    });
  });

  describe('word has been guessed', () => {
    let component;
    beforeEach(() => {
      const initialState = { success: true };
      const wrapper = setup(initialState);
      component = findByTestAttr(wrapper, 'new-word-button');
    });
    test('renders without error', () => {
      expect(component.length).toBe(1);
    });
    test('display style is block', () => {
      expect(component.props().style).toHaveProperty('display', 'block');
    });
  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('`getSecretWord` action creator is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
  test('`resetGame` action creator is a function prop', () => {
    const wrapper = setup();
    const resetGameProp = wrapper.instance().props.resetGame;
    expect(resetGameProp).toBeInstanceOf(Function);
  });
});

describe('`getSecretWord` and `resetGame` action creators call', () => {
  let getSecretWordMock;
  let resetGameMock;
  let wrapper;
  beforeEach(() => {
    getSecretWordMock = jest.fn();
    resetGameMock = jest.fn();
    wrapper = shallow(
      <NewWordButton getSecretWord={getSecretWordMock} resetGame={resetGameMock} />
    );

    const component = findByTestAttr(wrapper, 'new-word-button');
    component.simulate('click', { preventDefault() {} });
  });

  test('`getSecretWord` runs on button click', () => {
    const getSecretWordMockCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordMockCallCount).toBe(1);
  });
  test('`resetGame` runs on button click', () => {
    const resetGameMockCallCount = resetGameMock.mock.calls.length;
    expect(resetGameMockCallCount).toBe(1);
  });
});
