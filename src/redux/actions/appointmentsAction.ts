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
import {
  GET,
  POST,
  DELETE,
  ENDPOINT_GET_ALL_DOCTORS,
  ENDPOINT_GET_ALL_PATIENTS,
  ENDPOINT_DELETE_APPOINTMENT,
  ENDPOINT_GET_ALL_APPOINTMNETS,
} from "../../constants";
import { FETCH_API_CALL } from "../../services";
import {
  combineAppointmentDoctorPatient,
  makeAppointmentGroups,
  sortAppointments,
} from "../../helpers";
export const getAllAppointments = () => async (dispatch: any) => {
  try {
    dispatch({ type: GET_ALL_APPOINTMENTS_REQUEST });
    //GET all appointments
    const { appointments } = await FETCH_API_CALL({
      endpoint: ENDPOINT_GET_ALL_APPOINTMNETS,
      method: GET,
    });
    //GET all doctors
    const { doctors } = await FETCH_API_CALL({
      endpoint: ENDPOINT_GET_ALL_DOCTORS,
      method: GET,
    });
    //GET all patients
    const { patients } = await FETCH_API_CALL({
      endpoint: ENDPOINT_GET_ALL_PATIENTS,
      method: GET,
    });

    // finding and adding patients and doctors in appointments array (only those doctors and patients that ID's exists in appointments array)
    const updateAppointments = combineAppointmentDoctorPatient(
      appointments,
      patients,
      doctors
    );

    const appointmentGroups = makeAppointmentGroups(updateAppointments);
    const appointmentGroupsSort = {};

    //sort object in descending order
    sortAppointments(appointmentGroupsSort, appointmentGroups);

    dispatch({
      type: GET_ALL_APPOINTMENTS_SUCCESS,
      payload: { appointments: appointmentGroupsSort, doctors, patients },
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPOINTMENTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteAppointment =
  (appointmentID: any, reason: any) => async (dispatch: any) => {
    try {
      dispatch({ type: DELETE_APPOINTMENT_REQUEST });
      //api call
      const { appointment } = await FETCH_API_CALL({
        endpoint: `${ENDPOINT_DELETE_APPOINTMENT}/${appointmentID}`,
        method: DELETE,
        body: {
          reason,
        },
      });

      dispatch({
        type: DELETE_APPOINTMENT_SUCCESS,
        payload: appointment,
      });
    } catch (error) {
      dispatch({
        type: DELETE_APPOINTMENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const confirmAppointment =
  (appointmentID: any, doctorID: any) => async (dispatch: any) => {
    try {
      dispatch({ type: CONFIRM_APPOINTMENT_REQUEST });
      //api call
      const { appointment } = await FETCH_API_CALL({
        endpoint: `${ENDPOINT_DELETE_APPOINTMENT}/${appointmentID}/confirm`,
        method: POST,
        body: {
          doctorID,
        },
      });

      dispatch({
        type: CONFIRM_APPOINTMENT_SUCCESS,
        payload: appointment,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_APPOINTMENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
