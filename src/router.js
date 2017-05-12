import Home from './view/home/index.js';

import Basic from './view/JS/Basic';

import Grid from './view/CSS/Grid';

import Tips from './view/Tips';

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
  },
];


export { menu, routes };
