import React, { Component } from 'react';

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.incrementCounterHandler} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounterHandler}  />
                <CounterControl label="Add 8" clicked={this.props.addFiveCounterHandler}  />
                <CounterControl label="Subtract 10" clicked={this.props.substractFiveCounterHandler}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounterHandler: () => dispatch({type: 'INCREMENT'}),
    decrementCounterHandler: () => dispatch({type: 'DECREMENT'}),
    addFiveCounterHandler: () => dispatch({type: 'ADD', value: 8}),
    substractFiveCounterHandler: () => dispatch({type: 'SUBSTRACT', value: 10}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);