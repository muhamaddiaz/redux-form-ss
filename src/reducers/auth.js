import { EXAMPLE } from '../types';

const initialValues = {
  username: '',
  password: ''
}

const exampleReducer = (state = initialValues, action) => {
  switch (action.type) {
    case EXAMPLE.SUBMIT_USERNAME_PASSWORD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default exampleReducer;
