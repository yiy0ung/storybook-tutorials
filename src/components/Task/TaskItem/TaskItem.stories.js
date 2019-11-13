import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TaskItem from './TaskItem';

export const task = {
  idx: 1,
  content: '오늘할일',
  archive: false,
  pinned: false,
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
  onRemoveTask: action('onRemoveTask'),
};

storiesOf('TaskItem', module)
  .addDecorator(story => <div style={{ padding: '0 20rem' }}>{story()}</div>)
  .add('default', () => <TaskItem task={task} {...actions} />)
  .add('archived', () => <TaskItem task={{...task, archive: true}} {...actions} />)
  .add('pinned', () => <TaskItem task={{...task, pinned: true}} {...actions} />)
  .add('archived and pinned', () => <TaskItem task={{...task, archive: true, pinned: true}} {...actions} />)
