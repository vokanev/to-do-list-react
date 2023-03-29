import './App.css';

import {Route, Routes} from 'react-router-dom'

import {About} from './pages/about/About';
import {ActionInfo} from './pages/action_info/ActionInfo';
import {Home} from './pages/home/Home';
import {Navbar} from './components/navbar/Navbar';
import {NoMatch} from './pages/no_match/NoMatch';
import {TodoList} from './pages/todo_list/TodoList';
import LoginPage from './pages/login/LoginPage';
import { RequireAuth } from './hoc/RequireAuth';
import UserProfile from './pages/user_profile/UserProfile';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={
<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/todo' element = {
<TodoList />} />
      <Route path='/todo/:actionId' element={ <ActionInfo /> } />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/user' element={
        <RequireAuth>
          <UserProfile />
        </RequireAuth>
      } />
      <Route path='*' element={
<NoMatch />} />
    </Routes>
  </AuthProvider>
);
}

export default App;
