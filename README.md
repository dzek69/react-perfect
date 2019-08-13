# react-perfect

Simple render-saving library for your React components.

## Features

- saves from writing simple-but-repeating shouldComponentUpdate
- ideal for `react-redux` *
- ideal for plugin-like components when you're not controlling the props you are receiving and you don't rely on some of
them when rendering
- 1,5 kB of source code, should be few hundreds of bytes of minified & gzippped code

* - `mapDispatchToProps` is returning new method instances (even if they don't rely on `ownProps`) for each redux state
change. If your state change doesn't affect data you're returning with `mapStateToProps` - your connected component
will be re-rendered even when using `PureComponent`

## Usage

Proper docs are in @TODO state, sorry :)

tl;dr:

```jsx harmony
class MyComponent extends PureComponent {
    render() {
        return (
            <>
                <div>{this.props.title}</div>
                <button onClick={this.props.update}>update</button>
            </>
        );
    }
}

// other props will still be passed, but their updates will be ignored
export default rerender.on(MyComponent, ["title"]); 
```

## TODO

- docs
- unit tests

## License:

MIT
