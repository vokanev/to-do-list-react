import React, { useContext, useState } from "react";
import styles from './AddAction.module.css'
import { Context } from '../../utils/context';
import ActionButton from "../action_button/ActionButton";
import axios from 'axios'

const AddAction = () => {
  const { dispatch } = useContext(Context);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault()
    axios.post('https://dummyjson.com/todos/add', {
        todo: userInput,
        completed: false,
        userId: 5,
    }
    )
    .then(res => dispatch({
      type: 'add',
      payload: res.data
    }))    
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
    <form className={ styles.inputForm } onSubmit={handleSubmit}>
      <input
      className={styles.newActionName}
      value={userInput}
      type='text'
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      placeholder="Введите значение..." />
      <ActionButton onClick={handleSubmit}>Add</ActionButton>
      </form>
  );
};

export default AddAction;