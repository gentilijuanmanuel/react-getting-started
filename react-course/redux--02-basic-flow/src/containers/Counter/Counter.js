import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css';
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
                <hr />
                <div>
                  <button onClick={() => this.props.storeResultHandler(this.props.counter)}>Store result</button>
                </div>
                <div>
                  <ul>
                    { this.props.results.map(result => <li key={result.id} className="resultItem" onClick={() => this.props.deleteResultHandler(result.id)}>{result.value}</li>) }
                  </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounterHandler: () => dispatch({type: actionTypes.INCREMENT}),
    decrementCounterHandler: () => dispatch({type: actionTypes.DECREMENT}),
    addFiveCounterHandler: () => dispatch({type: actionTypes.ADD, counter: 8}),
    substractFiveCounterHandler: () => dispatch({type: actionTypes.SUBSTRACT, counter: 10}),
    storeResultHandler: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    deleteResultHandler: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);