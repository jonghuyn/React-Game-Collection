import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
}; // 왜 reducer에서 카운터의 초기 state를 설정하는거지...?

//state는 어디서 받아오는 걸까...?
const counter = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
//combineReducer를 사용하는 방법

const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;