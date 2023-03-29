import { useState, useReducer, useEffect } from "react";

import ActionButton from "../../components/action_button/ActionButton";
import AddAction from "../../components/add_action/AddAction";

import SortingSelector from "../../components/sorting_selector/SortingSelector";
import Title from "../../components/title/Title";
import { Context } from "../../utils/context";
import { DataLoader } from '../../components/data_loader/DataLoader';
import { Reducer } from '../../utils/reducer'
import ActionsList from "../../components/actions_list/ActionsList";
import { useLocation, useSearchParams } from "react-router-dom";

export const TodoList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [todos, dispatch] = useReducer(Reducer, [])
  const [sorting, setSorting] = useState(searchParams.get('sort'));
  const [searchPhrase, setSearchPhrase] = useState(searchParams.get('search') ?? "");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleClearAll = () => {
    dispatch({ type: "removeAll" });
  };

  useEffect(()=>{
    let params = {};
    if (sorting && sorting !== "NoSorting") params.sort = sorting;
    if (searchPhrase) params.search = searchPhrase;
    setSearchParams(params)
  }, [searchPhrase, sorting])

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
          <SortingSelector onChange={handleSortingChange} value={sorting}/>
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
