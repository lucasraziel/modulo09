import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

interface Initial {
  profile: null | object
}

interface Payload {
  user: object;
  profile: object;
}

interface Action {
  type: ActionTypes
  payload: Payload;
}

export type ActionTypes = '@auth/SIGN_IN_SUCCESS' | '@user/UPDATE_PROFILE_SUCCESS' | '@auth/SIGN_OUT'

export default function user(state: Initial = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
