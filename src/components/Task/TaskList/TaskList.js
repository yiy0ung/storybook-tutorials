import React from 'react';
import { FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
import './TaskList.scss';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask, onRemoveTask }) => {
  const taskList = tasks.map(task => (
    <TaskItem
      key={task.idx}
      task={{
        idx: task.idx,
        content: task.content,
        archive: task.archive,
        pinned: task.pinned, }}
      onPinTask={() => onPinTask(task.idx)}
      onArchiveTask={() => onArchiveTask(task.idx)}
      onRemoveTask={() => onRemoveTask(task.idx)}/>
  ));

  const LoadingRow = (
    <div className='TaskList-loadwrap loadingRow'>
      <span className='glow-checkbox'/>
      <span className='TaskList-loadwrap-text glow-text'>
        <span>Loading</span>
      </span>
      <span className='glow-checkbox'/>
      <span className='glow-checkbox'/>
    </div>
  );

  if (loading) {
    return (
      <div className={'TaskList'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length <= 0) {
    return (
      <div className={'TaskList'}>
        <div className={'TaskList-empty'}>
          <div className={'TaskList-empty-check'}>
            <FaCheck className={'TaskList-empty-check-icon'} />
          </div>
          <div className={'TaskList-empty-title'}>Task is empty</div>
          <div className={'TaskList-empty-subtitle'}>Let's start your task!</div>
        </div>
      </div>
    )
  }

  return (
    <div className={'TaskList'}>
      {taskList}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: [],
  onPinTask: () => {},
  onArchiveTask: () => {},
  onRemoveTask: () => {},
};

export default TaskList;