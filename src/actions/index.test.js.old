import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    //expect(action).toBe({}); // mutable type should be compared using 'toEqual()'
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS }); // deep equal!
  });
});
