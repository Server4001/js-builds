var MyComponent = React.createClass({
    render: function() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
});

var myComponent = React.render(<MyComponent name="Brice Bentler" />, document.getElementById('content'));

// I still have no idea what createFactory() would be used for...
var createMyComponent = React.createFactory('div');
var whatever = createMyComponent();
console.log(whatever);
