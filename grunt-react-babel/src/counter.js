var Counter = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },
    add: function() {
        this.setState({
            count: this.state.count + 1
        });
    },
    subtract: function() {
        this.setState({
            count: this.state.count - 1
        });
    },
    render: function() {
        // NOTE: You can only return 1 node here. You can't return an h1, then a p, then a span. Just return 1 parent node.
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>

                <button onClick={this.subtract}>Subtract 1</button>
                <button onClick={this.add}>Add 1</button>
            </div>
        );
    }
});

React.render(<Counter/>, document.body);
