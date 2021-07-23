import {
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_SUCCESS,
  GET_ALL_APPOINTMENTS_FAILURE,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_FAILURE,
  CONFIRM_APPOINTMENT_REQUEST,
  CONFIRM_APPOINTMENT_SUCCESS,
  CONFIRM_APPOINTMENT_FAILURE,
} from "../constants";
const INITIAL_STATE = {
  data: { appointments: {}, patients: [], doctors: [] },
};

export interface actionProps {
  type: string;
  payload: object;
}
export const appointmentListReducer = (
  state = INITIAL_STATE,
  action: actionProps
) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS_REQUEST:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ALL_APPOINTMENTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ALL_APPOINTMENTS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteAppointmentReducer = (
  state = INITIAL_STATE,
  action: actionProps
) => {
  switch (action.type) {
    case DELETE_APPOINTMENT_REQUEST:
      return {
        loading: false,
        data: action.payload,
      };
    case DELETE_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case DELETE_APPOINTMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const confirmAppointmentReducer = (
  state = INITIAL_STATE,
  action: actionProps
) => {
  switch (action.type) {
    case CONFIRM_APPOINTMENT_REQUEST:
      return {
        loading: false,
        data: action.payload,
      };
    case CONFIRM_APPOINTMENT_SUCCESS:
      return {
        loading: false,
      };
    case CONFIRM_APPOINTMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
