import React, { useState, useEffect, useCallback } from 'react';
import { observer, inject } from 'mobx-react';
import { TaskInput, TaskList } from './components/Task';
import './App.scss';

function App({ store }) {
  const { TaskStore } = store;
  const [loading, setLoading] = useState(true);

  // Load Task
  const onLoadTask = useCallback(async () => {
    await TaskStore.getTaskList();

    setLoading(false);
  }, [TaskStore]);

  // Create Task
  const onCreateTask = (taskContent) => {
    console.log(taskContent);
    const task = {
      idx: TaskStore.getIdx(),
      content: taskContent,
      pinned: false,
      archive: false,
    };

    TaskStore.createTask(task);
  }

  useEffect(() => {
    onLoadTask();
  }, [onLoadTask, setLoading]);

  return (
    <div className="App">
      <div className={'TaskTemplate'}>
        <div className={'TaskTemplate-header'}>
          Today Task
        </div>

        <div className={'TaskTemplate-content'}>
          <TaskInput onCreateTask={onCreateTask}/>
          <TaskList 
            loading={loading}
            tasks={TaskStore.taskList}
            onArchiveTask={TaskStore.archiveTask}
            onPinTask={TaskStore.pinnedTask}
            onRemoveTask={TaskStore.removeTask}
            />
        </div>
      </div>
    </div>
  );
}

export default inject('store')(observer(App));
