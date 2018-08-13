var Note = React.createClass({displayName: "Note",
    render: function() {
        return (
            React.createElement("div", null

            )
        );
    }
});

var Board = React.createClass({displayName: "Board",
    propTypes: {
        // This is part of the React library, and assists w/ validation of props. When an invalid value is provided for
        // a prop, a warning is shown in the console. For performance reasons, propTypes is only checked in dev mode.
        count: function(props, propName) {
            // This is the validation function for the prop: count.
            // Validate that the prop is a number:
            if (typeof props.count !== "number") { // Can also use: props[propName]
                return new Error("Prop 'count' must be a number!");
            }
            if (props.count > 100) {
                return new Error(`Creating ${props.count} notes is not allowed!`);
            }
        }
    },
    render: function() {
        return (
            React.createElement("div", {className: "board"}, 
                this.props.count
            )
        );
    }
});

var noteComponent = React.render(React.createElement(Board, {count: "a"}), document.getElementById('content'));

// An example of using the JSX "spread" syntax to copy all props:
var SpreadExample = React.createClass({displayName: "SpreadExample",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("a", React.__spread({},  this.props), this.props.children)
            )
        );
    }
});
// You would then use this like so:
// <SpreadExample href="/my/page" className="my-link" data-whatever="super-fly" id="my-id">Click Here</SpreadExample>
// This would output:
// <a href="/my/page" class="my-link" data-whatever="super-fly" id="my-id">Click Here</a>
