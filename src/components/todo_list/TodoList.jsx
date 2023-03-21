import { useState, useReducer, useEffect } from "react";

import ActionButton from "../action_button/ActionButton";
import AddAction from "../add_action/AddAction";

import SortingSelector from "../sorting_selector/SortingSelector";
import Title from "../title/Title";
import { Context } from "../../utils/context";
import { DataLoader } from './../data_loader/DataLoader';
import { Reducer } from '../../utils/reducer'
import ActionsList from "../actions_list/ActionsList";

export const TodoList = () => {
  const [todos, dispatch] = useReducer(Reducer, [])
  const [sorting, setSorting] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleClearAll = () => {
    dispatch({ type: "removeAll" });
  };

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
      <div className="App">
        <Title text="Список задач" />
        <AddAction />
        <ActionButton onClick={handleClearAll}>Clear all</ActionButton>
        <div className="actionsBlock">
          <SortingSelector onChange={handleSortingChange} />
          <input
            type="text"
            placeholder="Search"
            value={searchPhrase}
            onChange={(event) => setSearchPhrase(event.target.value)}
          />
        </div>
        <DataLoader />
        <ActionsList todos={todos} sorting={getSorting()} filter={searchPhrase} />
      </div>
    </Context.Provider>
  );
};
