import axios from "axios";

import { useEffect, useContext, useState } from "react";

import { Context } from "./../../utils/context";

export const DataLoader = () => {
  const { dispatch } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        dispatch({ type: "set", payload: res.data.todos });
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? <div>Loading</div> : error ? <div>Error</div> : null;
};
