import React, { useState } from 'react';
import styles from './CourseInput.module.css'
import Button from '../UI/Button/Button';


const CourseInput = (props) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isValid, setIsValid] = useState(true)

  const handleChange = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredInput.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.addGoalHandler(enteredInput);
    setEnteredInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label style={{color: !isValid ?  'red' : 'black'}}>Course Goal</label>
        <input 
          style={{
            borderColor: !isValid ?  'red' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent'
          }} 
          type="text" 
          value={enteredInput}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

