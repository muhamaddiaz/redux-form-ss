import { EXAMPLE } from "../../types";

export const setGreetingAction = (payload) => {
  return {
    type: EXAMPLE.SET_GREETING,
    payload
  }
}

export const setNameAction = (payload) => {
  return {
    type: EXAMPLE.SET_NAME,
    payload
  }
}
