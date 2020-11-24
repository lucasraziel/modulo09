import produce from 'immer';

interface Initial {
  token: null | string;
  signed: boolean;
  loading: boolean;
}

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export type ActionTypes = '@auth/SIGN_IN_REQUEST' | '@auth/SIGN_IN_SUCCESS' | '@auth/SIGN_FAILURE' | '@auth/SIGN_OUT'

interface Payload {
  token: string;
}

interface Action {
  type: ActionTypes
  payload: Payload;
}

export default function auth(state:Initial = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
