import {useReducer} from 'react';

import ActionItem from './components/action_item/ActionItem';
import ActionsList from './components/actions_list/ActionsList';
import AddAction from './components/add_action/AddAction';
import Title from './components/title/Title';
import {Context} from './context';
import reducer from './reducer';
import TodoList from './TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, [
    {title: 'task1', id: 1, completed: false},
    {title: 'task2', id: 2, completed: true}
  ])

  return (<Context.Provider value = {{
    dispatch
    }}>
      <div className = 'App'>
        <Title text = 'My Header' />
        <AddAction />
        <ActionsList todos={ state } />
        </div>
    </Context.Provider>);
}

export default App;
