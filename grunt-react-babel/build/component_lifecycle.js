"use strict";

var CanvasUploader = React.createClass({ displayName: "CanvasUploader",
    getInitialState: function getInitialState() {
        return {
            people: []
        };
    },
    loadData: function loadData() {
        return $.get("https://amber-heat-5838.firebaseio.com/" + this.props.url + ".json");
    },
    componentWillMount: function componentWillMount() {
        // Called immediately before the component is rendered. No DOM access.
        console.log("componentWillMount");
    },
    componentDidMount: function componentDidMount() {
        // Called immediately after the component is rendered. Has DOM access.
        this.loadData().then((function (data) {
            this.setState({ people: data });
        }).bind(this));

        // Twitter Bootstrap tooltip:
        $('#tip').tooltip();
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        // Called when a component is receiving NEW props. Not fired when the initial props are set.
        // nextProps contains the new set of props. The current props are accessible via this.props.
        console.log('componentWillReceiveProps');
        console.log(this.props);
        console.log(nextProps);
        // You can make this function run by executing the following code in the Chrome Dev Console:
        // myComponent.setProps({ url: "whatever" });
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        // Invoked immediately before rendering when new props or state are being received.
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        // Invoked immediately after the component's updates are flushed to the DOM.
        console.log('componentDidUpdate');
    },
    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        // Invoked before rendering, when new props or state are being received. Used to determine if the component
        // should be re-rendered or not. Returning false will skip the render method until the next state change.
        console.log('shouldComponentUpdate');
        return this.props.url !== nextProps.url || this.state.people.length !== nextState.people.length;
    },
    componentWillUnmount: function componentWillUnmount() {
        // Invoked immediately before a component is unmounted from the DOM.
        console.log('componentWillUnmount');
        $('#tip').tooltip('destroy');
        // To fire this method, type the following command into Chrome Dev Console:
        // React.unmountComponentAtNode(document.getElementById('content'));
    },
    render: function render() {
        var personHtml = function personHtml(person) {
            return React.createElement("li", null, "Name: ", person.firstname, " ", person.lastname, ". Age: ", person.age);
        };
        return React.createElement("div", null, React.createElement("ul", null, this.state.people.map(personHtml)), React.createElement("p", null, this.props.url), React.createElement("a", { href: "#", id: "tip", "data-toggle": "tooltip", title: "This is the tooltip title" }, "Hover over me for a tooltip"));
    }
});
var myComponent = React.render(React.createElement(CanvasUploader, { url: "people" }), document.getElementById('content'));
//# sourceMappingURL=component_lifecycle.js.map
