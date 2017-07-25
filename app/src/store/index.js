/* Npm import */
import { createStore } from 'redux';


/* Local import */
import reducer from './reducer';


/* Store */
const store = createStore(reducer);


/* Export */
export default store;
