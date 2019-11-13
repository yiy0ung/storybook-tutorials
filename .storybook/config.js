// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);


import { configure } from '@storybook/react';
import requestContext from 'require-context.macro';
import '../src/util.scss';

// const req = require.context('../src', true, /\.stories.js$/);
const req = requestContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
