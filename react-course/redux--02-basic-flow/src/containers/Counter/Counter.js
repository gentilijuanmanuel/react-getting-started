import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import './Counter.css';
class Counter extends Component {
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
    incrementCounterHandler: () => dispatch(actionCreators.increment()),
    decrementCounterHandler: () => dispatch(actionCreators.decrement()),
    addFiveCounterHandler: () => dispatch(actionCreators.add(8)),
    substractFiveCounterHandler: () => dispatch(actionCreators.subtract(10)),
    storeResultHandler: (result) => dispatch(actionCreators.storeResult(result)),
    deleteResultHandler: (id) => dispatch(actionCreators.deleteResult(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
