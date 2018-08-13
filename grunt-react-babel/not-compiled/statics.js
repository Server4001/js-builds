var Statics = React.createClass({displayName: "Statics",
    statics: {
        // Methods defined here will be static methods.
        customStaticMethod: function(num1, num2) {
            return (num1 + num2) / 2;
        }
    },
    render: function() {
        return (
            React.createElement("div", null

            )
        );
    }
});

var staticsComponent = React.render(React.createElement(Statics, null), document.getElementById('content'));

console.log(Statics.customStaticMethod(4, 7)); // 5.5
