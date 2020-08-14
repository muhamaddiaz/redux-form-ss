import { EXAMPLE } from '../types';

const initialState = {
  username: ''
}

function manualFormReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE.SET_USERNAME:
      return {
        username: action.payload
      }
    default:
      return state;
  }
}

export default manualFormReducer;
