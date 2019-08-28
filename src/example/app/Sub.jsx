import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import rerender from "../../index.jsx";

class Sub extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this._renderCount = 0;
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({ x: Math.random() });
        // }, 1000);
    }

    render() {
        this._renderCount++;

        return (
            <div>{this.props.counter} --- {this._renderCount}</div>
        );
    }
}

Sub.propTypes = {
    counter: PropTypes.number.isRequired,
};

// export default rerender.on(Sub, ["counter"]);
export default rerender.off(Sub, ["fastCounter"]);
