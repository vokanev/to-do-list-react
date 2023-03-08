import {useReducer} from 'react';

import ActionItem from './components/action_item/ActionItem';
import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import Title from './components/title/Title';
import {Context} from './context';
import reducer from './reducer';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  // const [state, dispatch] = useReducer(reducer, [
  //   {title: 'task1', id: 1, completed: false},
  //   {title: 'task2', id: 2, completed: true}
  // ])
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString().substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
      console.log(todos.length)
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (<Context.Provider value = {{
    }}>
      <div className = 'App'>
        <Title text ='Список задач' />
        <AddAction addTask={addTask}/>
        {todos.map((todo) => {
        return (
          <ActionItem
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
      </div>

    </Context.Provider>);
}

export default App;
