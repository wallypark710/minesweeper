import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@src/store';
import GlobalStyles from '@src/styles/GlobalStyles';
import App from '@src/App';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
