import './App.css';

import axios from 'axios';
import {useEffect, useReducer, useState} from 'react';
import {Route, Routes} from 'react-router-dom'

import {About} from './components/about/About';
import ActionButton from './components/action_button/ActionButton';
import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import {Home} from './components/home/Home';
import SortingSelector from './components/sorting_selector/SortingSelector';
import Title from './components/title/Title';
import {Context} from './utils/context';
import reducer from './utils/reducer';
import { Navbar } from './components/navbar/Navbar';
import { NoMatch } from './components/no_match/NoMatch';
import { ActionInfo } from './components/action_info/ActionInfo';

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(
      () => {localStorage.setItem('todoList', JSON.stringify(todos))}, [todos])

  const fetchData =
      async () => {
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

  useEffect(() => {fetchData()}, [])

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
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />

      <Route path='/todo' element = { 
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
                    value = {searchPhrase} onChange = {
                      (event) => setSearchPhrase(event.target.value)
                    } />
            </div > {content}</div>

      </Context.Provider>
} />
      <Route path='/todo/:actionId' element={ <ActionInfo /> } />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </>
);
}

export default App;
