import { SHOW_APPOINTMENTS, CREATE_APPOINTMENT, DELETE_APPOINTMENT } from '../actions/types';

// Initial state, each reducer must has its own state
const initialState = {
  citas: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_APPOINTMENTS:
      return {
        ...state
      }
    case CREATE_APPOINTMENT:
      return {
        ...state,
        citas: [...state.citas, action.payload]
      }
    case DELETE_APPOINTMENT:
      return {
        ...state,
        citas: state.citas.filter(cita => cita.id !== action.payload)
      }
    default:
      return state;
  }
}