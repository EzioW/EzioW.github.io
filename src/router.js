import React from 'react';

import Home from './view/home/index.js';

import Grid from './view/CSS/Grid';

const menu = [
  {
    title: 'Home',
  },
  {
    title: 'JavaScript',
    children: [{
      title: 'ECMAScript',
    },
    {
      title: 'Function',
    }],
  },
  {
    title: 'CSS',
    children: [{
      title: 'Flex',
    }, {
      title: 'Grid',
    }],
  },
  {
    title: 'Lib',
    children: [{
      title: 'React',
    }, {
      title: 'Webpack',
    }],
  },
];
const routes = [
  { path: '/',
    exact: true,
    main: Home,
  },
  { path: '/Home',
    main: Home,
  },
  { path: '/Grid',
    main: Grid,
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];


export { menu, routes };
