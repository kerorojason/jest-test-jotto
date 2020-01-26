import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import NewWordButton from './NewWordButton';

const resetActionMock = jest.fn();
const initialProps = { display: true, resetGame: resetActionMock };

const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props };
  return shallow(<NewWordButton {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'new-word');
  expect(component.length).toBe(1);
});

test('calls `resetAction` prop upon button click', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'new-word');
  component.simulate('click');
  expect(resetActionMock.mock.calls.length).toBe(1);
});
