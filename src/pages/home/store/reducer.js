import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    'aa': 'aa'
});

export default (state = defaultState, action) => {
    switch (action.type){
        case constants.CHANGE_DATA:
            return state.set('aa','bb');
        default:
            return state;
    }
}