import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Action, combineReducers, createStore } from 'redux';

import App from './App';
import { DEPARTMENTS, EMPLOYEES, getSomeTransfer, LOCATIONS } from './data';
import { dataReducer, formPageReducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { IAppState } from './types';


const rootReducer = combineReducers({
  data: dataReducer,
  formPage: formPageReducer,
})
const store = createStore<IAppState, Action<{}>, {}, {}>(rootReducer, {
    data: {
      departments: DEPARTMENTS,
      employees: EMPLOYEES,
      locations: LOCATIONS,
    },
    formPage: {
      departments: [],
      employees: [],
      locations: [],
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
