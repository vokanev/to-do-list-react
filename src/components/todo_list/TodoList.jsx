import { useState, useReducer, useEffect } from "react";

import ActionButton from "../action_button/ActionButton";
import AddAction from "../add_action/AddAction";

import { Context } from "../../utils/context";
import { DataLoader } from './../data_loader/DataLoader';
import { Reducer } from '../../utils/reducer'
import ActionsList from "../actions_list/ActionsList";

import logo from '../../assets/logo.svg';

import styles from "./TodoList.module.scss"

export const TodoList = () => {
  const [todos, dispatch] = useReducer(Reducer, [])
  const [sorting, setSorting] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
  };

  return (
    <Context.Provider
      value={{
        dispatch,
      }}
    >
      <div className={ styles.logo }>
        <img src = { logo } />
      </div>
      <div className={styles.newAction}>
        <AddAction />
      </div>
      <div className={styles.app}>
        {/* <DataLoader /> */}
        <ActionsList todos={todos} filter={searchPhrase} />
      </div>
    </Context.Provider>
  );
};
