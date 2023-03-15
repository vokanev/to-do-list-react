import './App.css';

import { useEffect, useReducer, useState } from 'react';

import ActionButton from './components/action_button/ActionButton';
import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import Title from './components/title/Title';
import {Context} from './utils/context';
import reducer from './utils/reducer';
import SortingSelector from './components/sorting_selector/SortingSelector';

function App() {
  const [todos, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem('todoList') || JSON.stringify([])))

  useEffect(
      () => {localStorage.setItem('todoList', JSON.stringify(todos))}, [todos])

  const clearAll = () => {
    dispatch({type: 'removeAll'})
  }

  return (<Context.Provider value = {{
    dispatch
    }}>
      <div className = 'App'>
        <Title text ='Список задач' />
        <AddAction />
        <ActionButton onClick={clearAll}>Clear all</ActionButton>

        <div>
          <SortingSelector />
          <input type='text' />
          <ActionButton>Search</ActionButton>
        </div>

        <ActionsList todos={ todos } />
      </div>

    </Context.Provider>);
}

export default App;
