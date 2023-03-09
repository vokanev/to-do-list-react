import React, { useContext, useState } from "react";
import styles from './AddAction.module.css'
import { Context } from '../../utils/context';

const AddAction = ({addTask}) => {
  const [userInput, setUserInput] = useState('');

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
    <form className={ styles.inputForm } onSubmit={handleSubmit}>
      <input
      className={styles.newActionName}
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