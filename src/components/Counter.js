import React from 'react';
//connect를 react-redux에서 불러온다.
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <h1>VALUE: { this.props.value}</h1>
        );
    }
}

//mapStateToProps는 이렇게 arrow function을 사용한다.
let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

//mapStateToProps를 사용하여 컴포넌트를 store에 연결시킨다.
Counter = connect(mapStateToProps)(Counter);

export default Counter;