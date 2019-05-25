import React from 'react';
import './Clock.css';

// TODO: change this, it must be a functional component :) 
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
          <h1 className="clock">
            {this.state.date.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
              })}
          </h1>
        );
    }
}

export default Clock;
