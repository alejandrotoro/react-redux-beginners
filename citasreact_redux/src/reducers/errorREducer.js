import { VALIDATE_FORM, SHOW_ERROR } from '../actions/types';

// Initial state, each reducer must has its own state
const initialState = {
  error: ""
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_ERROR:
      return {
        error: action.payload
      }
    // case SHOW_ERROR:
    //   return {
    //     ...state,
    //     citas: [...state.citas, action.payload]
    //   }
    default:
      return state;
  }
}