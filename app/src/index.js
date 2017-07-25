/* Npm import */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


/* Local import */
import App from 'src/components/App';
import store from 'src/store';


/* Code */
document.addEventListener('DOMContentLoaded', () => {
  const provider = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const node = document.getElementById('root');
  render(provider, node);
});
