import React, { useContext, useState } from "react";
import { Context } from '../../context';

const AddAction = ({addTask}) => {
  // const { dispatch } = useContext(Context);
  const [userInput, setUserInput] = useState('');

  // const addTodo = event => {
  //   if (event.key === 'Enter') {
  //     dispatch({
  //       type: 'add',
  //       payload: todoTitle
  //     })
  //     setTodoTitle('')
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTask(userInput)
    setUserInput("")
  }

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value )
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      value={userInput}
      type='text'
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      placeholder="Введите значение..." />
      <button onClick={handleSubmit}>Добавить</button>
      </form>
  );
};

export default AddAction;