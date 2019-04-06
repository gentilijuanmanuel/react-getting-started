import React from 'react';
import ReactDOM from 'react-dom';

//App component
function App() {
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}

//Clock component
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
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
        return(
            <div>
                <h2>Hello, world!</h2>
                <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

//=======================
ReactDOM.render(
    <App />,
    document.getElementById('root')
);