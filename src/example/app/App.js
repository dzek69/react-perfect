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
        setInterval(() => {
            this.setState(prev => ({
                fastCounter: prev.fastCounter + 1,
            }));
        }, 250); // eslint-disable-line no-magic-numbers

        setInterval(() => {
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
