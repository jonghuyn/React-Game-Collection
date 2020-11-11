export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';
// 카운터의 값을 올린다.

export function increment() {
    return {
        type: INCREMENT
    };
}
// 카운터의 값을 내린다
export function decrement() {
    return {
        type: DECREMENT
    };
}
// 버튼이 눌릴 때 더하거나 뺄 값을 설정한다.

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}