import { produce, Draft } from 'immer';

import { SignUpRequest, EmailDuplicateCheckRequest } from '@hooks/ui/useSignUpForm';

export const SIGN_UP_REQUEST = 'signUp/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'signUp/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'signUp/SIGN_UP_FAILURE';
export const EMAIL_DUPLICATE_CHECK_REQUEST = 'signUp/EMAIL_DUPLICATE_CHECK_REQUEST';
export const EMAIL_DUPLICATE_CHECK_SUCCESS = 'signUp/EMAIL_DUPLICATE_CHECK_SUCCESS';
export const EMAIL_DUPLICATE_CHECK_FAILURE = 'signUp/EMAIL_DUPLICATE_CHECK_FAILURE';

export const signUpRequest = (payload: SignUpRequest): FetchSignUpAction => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (payload: SignUpResponse): SignUpAction => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailure = (payload: SignUpResponse): SignUpAction => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const emailDuplicateCheckRequest = (payload: EmailDuplicateCheckRequest): FetchEmailDuplicateCheckAction => ({
  type: EMAIL_DUPLICATE_CHECK_REQUEST,
  payload,
});

export const initialState: SignUpResponse = {
  success: false,
  response: null,
  error: null,
};

export const signUpReducer = produce((draft: Draft<SignUpResponse>, action: SignUpAction) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      draft.success = action.payload.success;
      draft.response = action.payload.response;
      draft.error = action.payload.error;
      break;

    case SIGN_UP_FAILURE:
      draft.success = action.payload.success;
      draft.response = action.payload.response;
      draft.error = action.payload.error;
      break;

    default:
      break;
  }
}, initialState);

export type FetchSignUpAction = {
  type: typeof SIGN_UP_REQUEST;
  payload: SignUpRequest;
};

export type FetchEmailDuplicateCheckAction = {
  type: typeof EMAIL_DUPLICATE_CHECK_REQUEST;
  payload: EmailDuplicateCheckRequest;
};

export type SignUpResponse = {
  success: boolean;
  response: null;
  error: ErrorType | null;
};

export type ErrorType = {
  message: string;
  status: number;
};

export type SignUpAction = {
  type: typeof SIGN_UP_SUCCESS | typeof SIGN_UP_FAILURE;
  payload: SignUpResponse;
};
