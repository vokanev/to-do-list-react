import { useState, useReducer, useEffect } from "react";

import AddAction from "../add_action/AddAction";


import { Context } from "../../utils/context";
import { DataLoader } from './../data_loader/DataLoader';
import { Reducer } from '../../utils/reducer'
import ActionsList from "../actions_list/ActionsList";

import logo from '../../assets/logo.svg';

import styles from "./TodoList.module.scss"
import { StatisticsItem } from "../statistics_item/StatisticsItem";
import { EmptyActions } from "../empty_actions/EmptyActions";

export const TodoList = () => {
  const [todos, dispatch] = useReducer(Reducer, [])
  const [sorting, setSorting] = useState("todoFirst");
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
  };

  const getSorting = () => {
    switch (sorting) {
      case "todoFirst":
        return (action1, action2) => {
          return action1.completed > action2.completed ? 1 : -1;
        };

      case "doneFirst":
        return (action1, action2) => {
          return action1.completed < action2.completed ? 1 : -1;
        };

      case "alphabetically":
        return (action1, action2) => {
          return action1.todo.localeCompare(action2.todo);
        };

      case "reverseAlphabetically":
        return (action1, action2) => {
          return action2.todo.localeCompare(action1.todo);
        };

      default:
        return (action1, action2) => {
          return action1.id > action2.id ? 1 : -1;
        };
    }
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
      <div className={styles.actionsStatistics}>
        
      </div>
      <div className={styles.app}>
        <div className={styles.statistics}>
           <StatisticsItem 
           label={"Created"}
           total={todos.length} 
           className={"totalAction"} />

           <StatisticsItem 
           label={"Completed"}
           completed={todos.filter(todo => todo.completed).length}
           total={todos.length} />
        </div>
        <DataLoader />
        {todos.length ? 
        <ActionsList todos={todos} filter={searchPhrase} sorting={getSorting(sorting)}/>
        : <EmptyActions />
        }
      </div>
    </Context.Provider>
  );
};
