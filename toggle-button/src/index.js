import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
  <Toggle />,
    document.getElementById('root')
);
