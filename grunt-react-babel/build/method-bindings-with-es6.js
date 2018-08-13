"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MethodBindingsExampleOne = (function (_React$Component) {
    _inherits(MethodBindingsExampleOne, _React$Component);

    function MethodBindingsExampleOne(props) {
        _classCallCheck(this, MethodBindingsExampleOne);

        _get(Object.getPrototypeOf(MethodBindingsExampleOne.prototype), "constructor", this).call(this, props);

        // Instead of binding this to the zoom method all over the place, just do it once in the constructor.
        this.zoom = this.zoom.bind(this);
    }

    // If you find that you are doing this multiple times in a class, in multiple different classes, you can abstract this
    // behavior to a base component:
    _createClass(MethodBindingsExampleOne, [{
        key: "zoom",
        value: function zoom(event) {
            console.log(event.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-md-6 col-md-offset-3" }, React.createElement("input", { type: "range", id: "rngZoom", min: "1", max: "50", value: this.state.zoom, onChange: this.zoom,
                onInput: this.zoom })));
        }
    }]);

    return MethodBindingsExampleOne;
})(React.Component);

var BaseComponent = (function (_React$Component2) {
    _inherits(BaseComponent, _React$Component2);

    function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        _get(Object.getPrototypeOf(BaseComponent.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(BaseComponent, [{
        key: "handleMethodBindings",
        value: function handleMethodBindings() {
            var _this = this;

            for (var _len = arguments.length, methodNames = Array(_len), _key = 0; _key < _len; _key++) {
                methodNames[_key] = arguments[_key];
            }

            methodNames.forEach(function (methodName) {
                return _this[methodName] = _this[methodName].bind(_this);
            });
        }
    }]);

    return BaseComponent;
})(React.Component);

var MethodBindingsExampleTwo = (function (_BaseComponent) {
    _inherits(MethodBindingsExampleTwo, _BaseComponent);

    function MethodBindingsExampleTwo(props) {
        _classCallCheck(this, MethodBindingsExampleTwo);

        _get(Object.getPrototypeOf(MethodBindingsExampleTwo.prototype), "constructor", this).call(this, props);

        this.handleMethodBindings("zoomIn", "zoomOut");
    }

    _createClass(MethodBindingsExampleTwo, [{
        key: "zoomIn",
        value: function zoomIn(event) {
            console.log(event.target.value);
        }
    }, {
        key: "zoomOut",
        value: function zoomOut(event) {
            console.log(event.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-md-6 col-md-offset-3" }, "..."));
        }
    }]);

    return MethodBindingsExampleTwo;
})(BaseComponent);
//# sourceMappingURL=method-bindings-with-es6.js.map
