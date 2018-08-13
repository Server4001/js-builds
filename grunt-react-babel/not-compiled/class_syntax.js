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
            React.createElement("div", null, 
                React.createElement("p", null, "Prop: ", this.props.name), 
                React.createElement("p", null, "State: ", this.state.age), 
                React.createElement("button", {onClick: this.tick.bind(this)}, "tick()")
            )
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

var classSyntaxComponent = React.render(React.createElement(ClassSyntax, {name: "Brice Bentler"}), document.getElementById('content'));
