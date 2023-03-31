import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { ITodo } from "../../data/ITodo";

export const ActionInfo = () => {
  const { actionId } = useParams();
  let [todo, setTodo] = useState<ITodo | null>(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/todos/${actionId}`)
      .then((res) => {
        setTodo(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [todo]);

  return (
    <div>
      {loading
        ? "loading"
        : error
        ? error
        : todo
        ? `Todo: ${todo.todo}`
        : "Not found"}
    </div>
  );
};
