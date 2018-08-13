var MyComponent = React.createClass({displayName: "MyComponent",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("p", null, this.props.name)
            )
        );
    }
});

var myComponent = React.render(React.createElement(MyComponent, {name: "Brice Bentler"}), document.getElementById('content'));

// I still have no idea what createFactory() would be used for...
var createMyComponent = React.createFactory('div');
var whatever = createMyComponent();
console.log(whatever);
