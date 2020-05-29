import React from 'react';
import { render } from 'react-dom';
import { rootReducer } from './redux/rootReducer';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { App } from './components/App/App';
import './index.scss'

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducer,
   composeEnhancers(
      applyMiddleware( thunk )
   )
)

const app = (
   <Provider store={ store }>
      <App/>
   </Provider>
)

render(
   <React.StrictMode>
      { app }
   </React.StrictMode>,
   document.getElementById( 'root' )
);

