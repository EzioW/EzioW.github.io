import Home from './view/home/index.js';

import Basic from './view/JS/Basic';

import Grid from './view/CSS/Grid';

import Tips from './view/Tips';

import Tool from './view/Tool';

const menu = [
  {
    title: 'Home',
  }, {
    title: 'JavaScript',
    children: [{
      title: 'Basic',
    }, {
      title: 'ECMAScript',
    }, {
      title: 'Function',
    }],
  }, {
    title: 'CSS',
    children: [{
      title: 'Flex',
    }, {
      title: 'Grid',
    }],
  }, {
    title: 'Lib',
    children: [{
      title: 'React',
    }, {
      title: 'React Router',
    }, {
      title: 'Webpack',
    }],
  }, {
    title: 'Tips',
  }, {
    title: 'Tool',
  },
];
const routes = [
  { path: '/',
    exact: true,
    main: Home,
  }, { path: '/Grid',
    main: Grid,
  }, {
    path: '/Tips',
    main: Tips,
  }, {
    path: '/Basic',
    main: Basic,
  }, {
    path: '/Tool',
    main: Tool,
  },
];


export { menu, routes };
