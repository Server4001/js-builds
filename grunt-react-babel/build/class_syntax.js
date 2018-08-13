"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassSyntax = (function (_React$Component) {
    _inherits(ClassSyntax, _React$Component);

    function ClassSyntax(props) {
        _classCallCheck(this, ClassSyntax);

        _get(Object.getPrototypeOf(ClassSyntax.prototype), "constructor", this).call(this, props);
        // Instead of providing a separate getInitialState method, you set up your own state property in the constructor.
        this.state = {
            age: 30
        };
    }

    // propTypes and defaultProps are defined as properties on the constructor, instead of in the class body

    _createClass(ClassSyntax, [{
        key: "tick",
        value: function tick() {
            // If we do not bind this to the tick method in the render method below, then inside tick(), this will be undefined.
            // This is true for all methods. Either explicitly use .bind(this), or use arrow functions.
            this.setState({
                age: this.state.age + 1
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", null, React.createElement("p", null, "Prop: ", this.props.name), React.createElement("p", null, "State: ", this.state.age), React.createElement("button", { onClick: this.tick.bind(this) }, "tick()"));
        }
    }]);

    return ClassSyntax;
})(React.Component);

ClassSyntax.propTypes = {
    name: function name(props, propName) {
        if (typeof props.name !== "string") {
            return new Error("Prop 'name' must be a string!");
        }
    }
};
ClassSyntax.defaultProps = {
    name: 'A Person'
};

// ES6 does not support mixins.

var classSyntaxComponent = React.render(React.createElement(ClassSyntax, { name: "Brice Bentler" }), document.getElementById('content'));
//# sourceMappingURL=class_syntax.js.map
