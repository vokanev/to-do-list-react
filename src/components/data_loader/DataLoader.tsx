import axios from "axios";

import { useEffect, useContext, useState } from "react";

import { Context } from "../../utils/context";
import { ActionKind } from "../../utils/reducer";
import React from "react";

export const DataLoader = () => {
  const context = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        context?.dispatch({ type: ActionKind.set, payloads: res.data.todos });
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
