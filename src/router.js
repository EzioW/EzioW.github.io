import React from 'react';

import Home from './view/home/index.js';

const routes = [
  { path: '/',
    exact: true,
    main: Home,
  },
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];


export default routes;
