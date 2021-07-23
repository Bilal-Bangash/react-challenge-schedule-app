import { useState, useEffect } from "react";
import { FETCH_API_CALL } from "../services";

const useQuery = (
  request: object,
  {
    onError = (res: object | string) => {},
    onComplete = (res: object | [] | string) => {},
  } = {}
) => {
  //loading state for loader future work
  const [isLoading, setLoading] = useState<boolean>(true);

  //error state for showing error from API
  const [error, setError] = useState<string>("");

  //data state to store response from API
  const [data, setData] = useState<object | [] | string>();

  const fetch = () => {
    onRequest();
  };

  useEffect(() => {
    onRequest();
  });

  const onRequest = async () => {
    setLoading(true);

    setError("");
    // Calling API point and setting data or error on base of response
    await FETCH_API_CALL(request)
      .then((response) => {
        setData(response);
        onComplete(response);
      })
      .catch((error) => {
        setError(error);
        onError(error);
      });

    setLoading(false);
  };

  //returning loading state error or data to use in other components
  return { fetch, isLoading, error, data };
};

export default useQuery;
