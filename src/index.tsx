import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyles from '@src/styles/GlobalStyles';
import App from '@src/App';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
