var Stopwatch = React.createClass({
    getInitialState: function() {
        return {
            time: 0,
            until: 5,
            buttonEnabled: true
        };
    },
    start: function() {
        this.setState({
            buttonEnabled: false
        });

        // We save the interval to this.interval, so it can later be referenced.
        this.interval = setInterval(function() {
            this.tick();

            if (this.timeIsUp()) {
                this.finish();
            }
        }.bind(this), 1000);
    },
    tick: function() {
        var time = this.state.time + 1;
        this.setState({ time });
    },
    timeIsUp: function() {
        return this.state.time >= this.state.until;
    },
    finish: function() {
        console.log("DING DING DING!!!");

        this.setState({ time: 0, until: '', buttonEnabled: true });
        // Instead, if you wanted to reset the state to the initial values, you could use:
        //this.replaceState(this.getInitialState());

        React.findDOMNode(this.refs.untilInput).focus();

        return clearInterval(this.interval);
    },
    onChange: function(event) {
        var until = event.target.value;

        this.setState({ until });
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.until} onChange={this.onChange} ref="untilInput" />
                <button onClick={this.start} disabled={!this.state.buttonEnabled}>Go!</button>
                <h1>{this.state.time}</h1>
            </div>
        );
    }
});

React.render(<Stopwatch />, document.body);

/*
An example of using a callback function as a ref:
 <input type="text" value={this.state.until} onChange={this.onChange} ref={function(currentComponent) {
    React.findDOMNode(currentComponent).focus();
}} />
This callback would run once the DOM finished loading this element.
 */
