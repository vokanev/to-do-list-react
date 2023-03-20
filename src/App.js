import './App.css';

import axios from 'axios'
import {useEffect, useReducer, useState} from 'react';

import ActionButton from './components/action_button/ActionButton';
import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import SortingSelector from './components/sorting_selector/SortingSelector';
import Title from './components/title/Title';
import {Context} from './utils/context';
import reducer from './utils/reducer';

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(
      () => {localStorage.setItem('todoList', JSON.stringify(todos))}, [todos])

  const fetchData = async () => {
    axios.get('https://dummyjson.com/todos')
    .then(res => {
      // console.log(res.data.todos)
      dispatch({type: 'set', payload: res.data.todos})
      setIsLoading(false)
      setError(null)
    })
    .catch(error => {
      console.log(error)
      setIsLoading(false)
      setError(error)
    })
  }

  useEffect(
      () => {
          fetchData()
      },
      [])

  const clearAll = () => {
    dispatch({type: 'removeAll'})
  }

  const content = isLoading ? 
  (<div>Loading</div>) : 
  ( error ? (<div>error</div>) :
  (<ActionsList todos =
    {
      searchPhrase ? todos.filter(
                          (todo) => {return todo.todo.toLowerCase().includes(
                              searchPhrase.toLocaleLowerCase())}) :
                      todos
    } />))
    console.log(todos)
  return (
  <Context.Provider value = {{
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
        {content}
      </div>

      </Context.Provider>);
}

export default App;
