import { EXAMPLE } from '../types';

const initialValues = {
  greeting: '',
  name: ''
}

const exampleReducer = (state = initialValues, action) => {
  switch (action.type) {
    case EXAMPLE.SET_GREETING:
      return {
        ...state,
        greeting: action.payload
      }
    case EXAMPLE.SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}

export default exampleReducer;
