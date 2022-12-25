// import 'react-app-polyfill/ie11';
// import 'react-app-polyfilol/stable';
import React from 'react';
import ReactDOM from 'react-dom';
// import './i18n/config';
import './index.css';
import './cssUtils/css/bootstrap.min.css';
// import './cssUtils/css/carm-theme.css';
// import './cssUtils/css/rapid-proposal-theme.css';
// import './cssUtils/css/override.css';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>,document.getElementById('root'));
