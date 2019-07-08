import React, { Component } from "react";
import pick from "bottom-line-utils/dist/pick";
import omit from "bottom-line-utils/dist/omit";

const shallowDiffers = (a, b) => {
    for (const i in a) {
        if (!(i in b)) { return true; }
    }
    for (const i in b) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
};

const on = (BaseComponent, props) => {
    class UpdateOn extends Component {
        shouldComponentUpdate(nextProps) {
            const c = pick(this.props, props);
            const n = pick(nextProps, props);

            return shallowDiffers(c, n);
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    }

    UpdateOn.displayName = "UpdateOn(" + (BaseComponent.displayName || BaseComponent.name) + ": " + props + ")";

    return UpdateOn;
};

const off = (BaseComponent, props) => {
    class UpdateOff extends Component { // eslint-disable-line react/no-multi-comp
        shouldComponentUpdate(nextProps) {
            const c = omit(this.props, props);
            const n = omit(nextProps, props);

            return shallowDiffers(c, n);
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    }

    UpdateOff.displayName = "UpdateOff(" + (BaseComponent.displayName || BaseComponent.name) + ": " + props + ")";

    return UpdateOff;
};

const rerender = {
    on, off,
};

export default rerender;
