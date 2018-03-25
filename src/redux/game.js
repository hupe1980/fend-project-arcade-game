import { DEFAULT_PLAYER_IMAGE, INITIAL_STATE } from '../game';

const initialState = {
  avatar: DEFAULT_PLAYER_IMAGE,
  ...INITIAL_STATE,
};

export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_STATE = 'LEVEL_UP';

export const changeAvatar = avatar => ({
  type: CHANGE_AVATAR,
  payload: avatar,
});

export const changeState = (key, value) => ({
  type: CHANGE_STATE,
  payload: {
    [key]: value,
  },
});

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    case CHANGE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
