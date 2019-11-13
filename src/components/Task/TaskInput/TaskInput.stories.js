import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TaskInput from './TaskInput';

export const actions = {
  onCreateTask: action('onCreateTask'),
};

storiesOf('TaskInput', module)
  .add('default', () => <TaskInput {...actions} />);

