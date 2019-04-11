import { VALIDATE_FORM, SHOW_ERROR } from './types';

export const showError = (status) => {
  return {
    type: SHOW_ERROR,
    payload: status
  }
}

// export const addAppointment = (appointment) => {
//   return {
//     type: SHOW_ERROR,
//     payload: appointment
//   }
// }
