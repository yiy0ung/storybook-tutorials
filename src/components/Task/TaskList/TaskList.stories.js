import React from 'react';
import { storiesOf } from '@storybook/react';

import { task, actions } from '../TaskItem/TaskItem.stories';
import TaskList from './TaskList';

export const defaultTasks = [
  {...task, idx: 1, content: '오늘 할일1' },
  {...task, idx: 2, content: '오늘 할일2' },
  {...task, idx: 3, content: '오늘 할일3' },
  {...task, idx: 4, content: '오늘 할일4' },
  {...task, idx: 5, content: '오늘 할일5' },
  {...task, idx: 6, content: '오늘 할일6' },
];

export const withArchivePinTask = [
  ...defaultTasks.slice(0, 3),
  {...task, idx: 4, content: '오늘 할일4', archive: true, pinned: true },
  {...task, idx: 5, content: '오늘 할일5', archive: true },
  {...task, idx: 6, content: '오늘 할일6', pinned: false },
];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '10rem' }}>{story()}</div>)
  .add('default', () => <TaskList tasks={defaultTasks} {...actions} />)
  .add('withAction', () => <TaskList tasks={withArchivePinTask} {...actions} />)
  .add('loading', () => <TaskList loading={true} tasks={[]} {...actions} />)
  .add('empty', () => <TaskList tasks={[]} {...actions} />);
