import { SET_GOALS_COMPLETED } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case SET_GOALS_COMPLETED:
            const { completeGoals } = action;
            return completeGoals;
        
        default:
            return state;
    }
}