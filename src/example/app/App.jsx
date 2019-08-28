import React, { Component } from "react";

import Sub from "./Sub";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fastCounter: 1,
            slowCounter: 1,
        };
    }

    componentDidMount() {
        this._startIncrements();
    }

    componentWillUnmount() {
        clearInterval(this._int1);
        clearInterval(this._int2);
    }

    _startIncrements() {
        this._int1 = setInterval(() => {
            this.setState(prev => ({
                fastCounter: prev.fastCounter + 1,
            }));
        }, 250); // eslint-disable-line no-magic-numbers

        this._int2 = setInterval(() => {
            this.setState(prev => ({
                slowCounter: prev.slowCounter + 1,
            }));
        }, 1000); // eslint-disable-line no-magic-numbers
    }

    render() {
        return (
            <div>
                <i>Fast counter, should be ignored: {this.state.fastCounter}</i>
                <Sub counter={this.state.slowCounter} fastCounter={this.state.fastCounter} />
            </div>
        );
    }
}

export default App;
