import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar, FaRegTrashAlt } from 'react-icons/fa';
import './TaskItem.scss';

const Task = ({ task: { idx, content, archive, pinned }, onPinTask, onArchiveTask, onRemoveTask }) => {
  
  const onArchive = (e) => {
    onArchiveTask();
    e.stopPropagation();
  }
  
  const onPin = (e) => {
    onPinTask();
    e.stopPropagation();
  }

  const onRemove = (e) => {
    onRemoveTask();
    e.stopPropagation();
  }
  
  
  return (
    <div className={'Task-container'} onClick={onArchive}>
      <div className={'Task'}>

        <div className={`Task-content`}>
          {archive ? (
            <>
              <span className={'Task-content-fin'}>{content}</span>
              <span className={'Task-content-fin-icon'}>finish</span>
            </>
          ) : (
            <span>{content}</span>
          )}

        </div>
        
        <div className={'Task-pin'} onClick={onPin}>
          {pinned ? 
            <FaStar className={'Task-pin-iconDone'} /> : 
            <FaRegStar className={'Task-pin-icon'} />}
        </div>
        <div className={'Task-remove'} onClick={onRemove}>
          <FaRegTrashAlt className={'Task-remove-icon'} />
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    idx: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    archive: PropTypes.bool.isRequired,
    pinned: PropTypes.bool.isRequired,
  }),
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
};

export default Task;