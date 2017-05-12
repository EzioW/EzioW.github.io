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
  { path: '/Grid',
    main: Grid,
  },
];


export { menu, routes };
