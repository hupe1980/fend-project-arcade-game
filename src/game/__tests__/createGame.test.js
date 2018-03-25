import { createState } from '../createGame';
import { INITIAL_STATE } from '../constants';

describe('createGame', () => {
  describe('createState', () => {
    it('creates a state with INITIAL_STATE values', () => {
      const state = createState();
      Object.keys(INITIAL_STATE).forEach(key => {
        expect(state[key]).toEqual(INITIAL_STATE[key]);
      });
    });

    it('resets the state to INITIAL_STATE values', () => {
      const state = createState();
      state.points = 999;
      state.level = 999;
      state.lives = 999;

      Object.keys(INITIAL_STATE).forEach(key => {
        expect(state[key]).not.toEqual(INITIAL_STATE[key]);
      });

      state.reset();

      Object.keys(INITIAL_STATE).forEach(key => {
        expect(state[key]).toEqual(INITIAL_STATE[key]);
      });
    });

    it('calls the listener', () => {
      const mockListener = jest.fn();
      const state = createState(mockListener);
      state.points = 999;

      expect(mockListener).toHaveBeenCalled();
    });
  });
});
