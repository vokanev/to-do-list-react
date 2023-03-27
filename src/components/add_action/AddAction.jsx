import React, { useContext, useState } from "react";
import styles from './AddAction.module.scss'
import { Context } from '../../utils/context';
import plus from '../../assets/plus.svg'; 
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
    <div className={ styles.newActionBlock } onSubmit={handleSubmit}>
      <input
      className={styles.newActionName}
      value={userInput}
      type='text'
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      placeholder="Add a new task" />
      <button className={styles.addActionButton} onClick={handleSubmit}>
        Create
        <img src= {plus} />
      </button>
    </div>
  );
};

export default AddAction;