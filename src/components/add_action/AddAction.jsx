import React, { useContext, useState } from "react";
import { Context } from '../../context';

const AddAction = () => {
  const { dispatch } = useContext(Context);
  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = event => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('')
    }
  }

  return (
    <div className="input-field">
      <input
        type="text"
        value={todoTitle}
        onChange={event => setTodoTitle(event.target.value)}
        onKeyDown={addTodo}
      />
      <label>Todo name</label>
    </div>
  );
};

export default AddAction;