import {createStore} from 'redux';

import {hotColdReducer} from './reducers';

export default createStore(hotColdReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());