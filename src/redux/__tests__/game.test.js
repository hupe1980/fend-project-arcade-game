import reducer, {
  CHANGE_AVATAR,
  CHANGE_STATE,
  changeAvatar,
  changeState,
} from '../game';

describe('redux game', () => {
  describe('actionCreator', () => {
    it('creates changeAvatar action', () => {
      const actual = changeAvatar('newAvatar');
      expect(actual).toEqual({ type: CHANGE_AVATAR, payload: 'newAvatar' });
    });

    it('creates changeState action', () => {
      const actual = changeState('key', 'value');
      expect(actual).toEqual({ type: CHANGE_STATE, payload: { key: 'value' } });
    });
  });

  describe('reducer', () => {
    it('changes the avatar', () => {
      const newState = reducer(
        { avatar: 'old_avatar' },
        { type: CHANGE_AVATAR, payload: 'newAvatar' },
      );
      expect(newState.avatar).toEqual('newAvatar');
    });

    it('changes the points', () => {
      const newState = reducer(
        { points: 0 },
        { type: CHANGE_STATE, payload: { points: 1 } },
      );
      expect(newState.points).toEqual(1);
    });

    it('returns the unchanged state', () => {
      const oldState = { points: 0 };
      const newState = reducer(oldState, {
        type: '@@UNKNOWN@@',
        payload: { points: 1 },
      });
      expect(newState).toEqual(oldState);
    });
  });
});
