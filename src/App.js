import './App.css';

import {Route, Routes} from 'react-router-dom'

import {About} from './components/about/About';
import {ActionInfo} from './components/action_info/ActionInfo';
import {Home} from './components/home/Home';
import {Navbar} from './components/navbar/Navbar';
import {NoMatch} from './components/no_match/NoMatch';
import {TodoList} from './components/todo_list/TodoList';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={
<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/todo' element = {
<TodoList />} />
      <Route path='/todo/:actionId' element={ <ActionInfo /> } />
      <Route path='*' element={
<NoMatch />} />
    </Routes>
  </>
);
}

export default App;
