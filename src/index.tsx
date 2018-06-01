import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Action, createStore } from 'redux';
import { App } from './App';
import { DEPARTMENTS, EMPLOYEES, getSomeTransfer, LOCATIONS } from './data';
import './index.css';
import { formPageReducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { IAppState } from './types';


const store = createStore<IAppState, Action<{}>, {}, {}>(formPageReducer, {
  data: {
    departments: DEPARTMENTS,
    employees: EMPLOYEES,
    locations: LOCATIONS,
  },
  page: {
    departments: DEPARTMENTS,
    employees: EMPLOYEES,
    locations: LOCATIONS,
    transfer: getSomeTransfer(),
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
