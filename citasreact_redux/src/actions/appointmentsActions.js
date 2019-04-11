import { SHOW_APPOINTMENTS, CREATE_APPOINTMENT, DELETE_APPOINTMENT } from './types';

export const getAppointments = () => {
  return {
    type: SHOW_APPOINTMENTS
  }
}

export const addAppointment = (appointment) => {
  return {
    type: CREATE_APPOINTMENT,
    payload: appointment
  }
}

export const removeAppointment = (id) => {
  return {
    type: DELETE_APPOINTMENT,
    payload: id
  }
}
