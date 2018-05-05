import React from 'react';
import ReactDOM from 'react-dom';

/** Create Store For REDUX */
import { createStore } from 'redux'
import reducers from './redux/reducers';

/** Provider */
import { Provider } from 'react-redux'

/** Router */
import App from './App';

const title = 'STARTER PACK BY MEITOEY';
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') 

);

module.hot.accept();
