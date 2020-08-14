import { EXAMPLE } from '../../types';

export function setUsernameAction(payload) {
  return {
    type: EXAMPLE.SET_USERNAME,
    payload
  }
}

export function submitUsernameAction(payload) {
  return {
    type: EXAMPLE.SUBMIT_USERNAME_PASSWORD,
    payload
  }
}
