import React from 'react';
import ReactDOM from 'react-dom/client';
import { Waiters } from './features/waiters'
import { Provider } from 'react-redux';
import {store} from "./store";
// import {Counter} from "./features/Counter";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      {/*<Counter />*/}
      <Waiters />
    </Provider>
);