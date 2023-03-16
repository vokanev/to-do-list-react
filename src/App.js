import './App.css';

import {useEffect, useReducer, useState} from 'react';

import ActionButton from './components/action_button/ActionButton';
import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import SortingSelector from './components/sorting_selector/SortingSelector';
import Title from './components/title/Title';
import {Context} from './utils/context';
import reducer from './utils/reducer';

function App() {
  // const [todos, dispatch] = useReducer(
  //     reducer,
  //     JSON.parse(localStorage.getItem('todoList') || JSON.stringify([])));
  const [todos, dispatch] = useReducer(
      reducer,
      []);


  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(
      () => {localStorage.setItem('todoList', JSON.stringify(todos))}, [todos])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'set',
          payload: res.todos
        })})
  }, [])

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

        <div className="actionsBlock">
          <SortingSelector />
          <input type='text'
  placeholder = 'Search'
  value = {searchPhrase} onChange =
  {
    (event) => setSearchPhrase(event.target.value)
  } />
        </div >

      <ActionsList todos =
       {
         searchPhrase ? todos.filter(
                            (todo) => {return todo.todo.toLowerCase().includes(
                                searchPhrase.toLocaleLowerCase())}) :
                        todos
       } />
      </div>

      </Context.Provider>);
}

export default App;
