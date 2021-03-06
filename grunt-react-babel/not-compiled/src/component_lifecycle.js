var CanvasUploader = React.createClass({
    getInitialState: function() {
        return {
            people: []
        };
    },
    loadData: function() {
        return $.get(`https://amber-heat-5838.firebaseio.com/${this.props.url}.json`);
    },
    componentWillMount: function() {
        // Called immediately before the component is rendered. No DOM access.
        console.log("componentWillMount");
    },
    componentDidMount: function() {
        // Called immediately after the component is rendered. Has DOM access.
        this.loadData().then(function(data) {
            this.setState({people: data});
        }.bind(this));

        // Twitter Bootstrap tooltip:
        $('#tip').tooltip();
    },
    componentWillReceiveProps: function(nextProps) {
        // Called when a component is receiving NEW props. Not fired when the initial props are set.
        // nextProps contains the new set of props. The current props are accessible via this.props.
        console.log('componentWillReceiveProps');
        console.log(this.props);
        console.log(nextProps);
        // You can make this function run by executing the following code in the Chrome Dev Console:
        // myComponent.setProps({ url: "whatever" });
    },
    componentWillUpdate: function(nextProps, nextState) {
        // Invoked immediately before rendering when new props or state are being received.
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function(prevProps, prevState) {
        // Invoked immediately after the component's updates are flushed to the DOM.
        console.log('componentDidUpdate');
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        // Invoked before rendering, when new props or state are being received. Used to determine if the component
        // should be re-rendered or not. Returning false will skip the render method until the next state change.
        console.log('shouldComponentUpdate');
        return this.props.url !== nextProps.url || this.state.people.length !== nextState.people.length;
    },
    componentWillUnmount: function() {
        // Invoked immediately before a component is unmounted from the DOM.
        console.log('componentWillUnmount');
        $('#tip').tooltip('destroy');
        // To fire this method, type the following command into Chrome Dev Console:
        // React.unmountComponentAtNode(document.getElementById('content'));
    },
    render: function() {
        var personHtml = function(person) {
            return <li>Name: {person.firstname} {person.lastname}. Age: {person.age}</li>;
        };
        return (
            <div>
                <ul>
                    {this.state.people.map(personHtml)}
                </ul>
                <p>{this.props.url}</p>
                <a href="#" id="tip" data-toggle="tooltip" title="This is the tooltip title">Hover over me for a tooltip</a>
            </div>
        );
    }
});
var myComponent = React.render(<CanvasUploader url="people"/>, document.getElementById('content'));
