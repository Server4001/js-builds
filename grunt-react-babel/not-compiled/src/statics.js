var Statics = React.createClass({
    statics: {
        // Methods defined here will be static methods.
        customStaticMethod: function(num1, num2) {
            return (num1 + num2) / 2;
        }
    },
    render: function() {
        return (
            <div>

            </div>
        );
    }
});

var staticsComponent = React.render(<Statics />, document.getElementById('content'));

console.log(Statics.customStaticMethod(4, 7)); // 5.5
