import React, { useState, useCallback } from 'react';
import './TaskInput.scss';

const TaskInput = ({ onCreateTask }) => {
  const [task, setTask] = useState('');

  const onChangeTask = useCallback((e) => {
    const { value } = e.target;

    setTask(value);
  }, [setTask]);

  return (
    <div className={'TaskInput-container'}>
      <div className={'TaskInput'}>
        <input 
          type={'text'} 
          className={'TaskInput-input'} 
          value={task} 
          onChange={onChangeTask} 
          placeholder="Please input your task" />

        <div className={'TaskInput-submit'}>
          <button className={'TaskInput-submit-btn'} onClick={() => onCreateTask(task)}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;