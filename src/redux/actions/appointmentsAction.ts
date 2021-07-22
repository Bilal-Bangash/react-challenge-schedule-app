import {
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_SUCCESS,
  GET_ALL_APPOINTMENTS_FAILURE,
} from "../constants";
import {
  ENDPOINT_GET_ALL_APPOINTMNETS,
  ENDPOINT_GET_ALL_DOCTORS,
  ENDPOINT_GET_ALL_PATIENTS,
  GET,
} from "../../constants";
import { FETCH_API_CALL } from "../../services";
import {
  combineAppointmentDoctorPatient,
  makeAppointmentGroups,
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

    dispatch({
      type: GET_ALL_APPOINTMENTS_SUCCESS,
      payload: { appointments: appointmentGroups, doctors, patients },
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
