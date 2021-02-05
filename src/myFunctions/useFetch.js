import { useState, useEffect } from "react";

const useFetch = () => {
  const [apiData, setApiData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [requestError, setRequestError] = useState(false)
useEffect(() => {
    fetch("https://poetrydb.org/author,title/Shakespeare;Sonnet")
      .then((response) => {
        setRequestError(!response.ok);
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Response status: " + response.status);
        }
      })
      .then((result) => {
        setApiData(result);
        setIsLoading(false);
     
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {apiData, isLoading, requestError}
}

export default useFetch;