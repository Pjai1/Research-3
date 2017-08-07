import { combineReducers } from 'redux';
import user from './reducerUsers';
import goals from './reducerGoals';
import completeGoals from './reducerCompletedGoals';

export default combineReducers({
    user, goals, completeGoals
})