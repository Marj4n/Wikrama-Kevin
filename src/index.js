import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import Cursor from './components/AnimateCursor';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
    <Cursor />
  </>,
  document.getElementById('root')
);
