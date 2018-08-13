class ClassSyntax extends React.Component {
    constructor(props) {
        super(props);
        // Instead of providing a separate getInitialState method, you set up your own state property in the constructor.
        this.state = {
            age: 30
        };
    }

    tick() {
        // If we do not bind this to the tick method in the render method below, then inside tick(), this will be undefined.
        // This is true for all methods. Either explicitly use .bind(this), or use arrow functions.
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <p>Prop: {this.props.name}</p>
                <p>State: {this.state.age}</p>
                <button onClick={this.tick.bind(this)}>tick()</button>
            </div>
        );
    }
}

// propTypes and defaultProps are defined as properties on the constructor, instead of in the class body
ClassSyntax.propTypes = {
    name: function(props, propName) {
        if (typeof props.name !== "string") {
            return new Error("Prop 'name' must be a string!");
        }
    }
};
ClassSyntax.defaultProps = {
    name: 'A Person'
};

// ES6 does not support mixins.

var classSyntaxComponent = React.render(<ClassSyntax name="Brice Bentler" />, document.getElementById('content'));
