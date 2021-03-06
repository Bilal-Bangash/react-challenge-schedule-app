import { API_ROOT } from "../constants";

const FETCH_API_CALL = async (request: any) => {
  // create options object with method and body from request
  let options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: request.method,
    body: request && request.body && JSON.stringify(request.body),
  };

  // calling API in try catch for handling exceptions
  try {
    const response = await fetch(`${API_ROOT}${request.endpoint}`, options);
    const res = await response.json();
    // returning res
    return res;
  } catch (error) {
    // if there is any error then returning error
    return error;
  }
};

export default FETCH_API_CALL;
