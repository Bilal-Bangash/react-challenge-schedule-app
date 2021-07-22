import {
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_SUCCESS,
  GET_ALL_APPOINTMENTS_FAILURE,
} from "../constants";
const initialState = {
  data: { appointments: [] },
};

export const appointmentListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS_REQUEST:
      return {
        loading: true,
        data: {
          appointments: [],
          patients: [],
          doctors: [],
        },
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
