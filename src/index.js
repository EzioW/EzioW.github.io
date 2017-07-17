import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './view/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    window.document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./view/App', () => { render(App); });
}
