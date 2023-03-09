import {useReducer} from 'react';

import ActionsList from './components/actions_list/ActionsList';
import './App.css';
import AddAction from './components/add_action/AddAction';
import Title from './components/title/Title';
import {Context} from './utils/context';
import reducer from './utils/reducer';
import { useState } from 'react';

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  // const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    dispatch({
      type: "add",
      payload: userInput
    })
  }
  return (<Context.Provider value = {{
      dispatch
    }}>
      <div className = 'App'>
        <Title text ='Список задач' />
        <AddAction addTask={addTask}/>

        <ActionsList todos={todos } />
        {/* <ActionsList todos={todos.filter(todo => !todo.complete) } />
        <ActionsList todos={todos.filter(todo => todo.complete)} /> */}
      </div>

    </Context.Provider>);
}

export default App;
