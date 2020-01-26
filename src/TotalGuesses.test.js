import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import TotalGuesses from './TotalGuesses';

const initialProps = { totalGuesses: 0 };
const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'total-guesses');
  expect(component.length).toBe(1);
});

test('renders the number of guessWords', () => {
  const wrapper = setup({ totalGuesses: 3 });
  const component = findByTestAttr(wrapper, 'total-guesses');
  expect(component.text()).toContain('3');
});
