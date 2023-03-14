import './App.css';

import {useEffect, useReducer} from 'react';

import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import Title from './components/title/Title';
import {Context} from './utils/context';
import reducer from './utils/reducer';
import ActionButton from './components/action_button/ActionButton';

function App() {
  const [todos, dispatch] =
      useReducer(reducer, JSON.parse(localStorage.getItem('todoList') || JSON.stringify([])))

  useEffect(
      () => {localStorage.setItem('todoList', JSON.stringify(todos))}, [todos])

  console.log('todos: ' + todos)

  const clearAll = () => {
    dispatch({
      type: "removeAll"
    })
  }

  return (<Context.Provider value = {{
      dispatch
    }}>
      <div className = 'App'>
        <Title text ='Список задач' />
        <AddAction />
        <ActionButton onClick={clearAll}>Clear all</ActionButton>

        <ActionsList todos={todos} />
        {/* <ActionsList todos={todos.filter(todo => !todo.complete) } />
        <ActionsList todos={todos.filter(todo => todo.complete)} /> */}
      </div>

    </Context.Provider>);
}

export default App;
