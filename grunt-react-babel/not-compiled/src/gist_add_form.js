var GistAddForm = React.createClass({
    getInitialState: function() {
        return {
            username: ""
        };
    },
    onChange: function(event) {
        this.setState({
            username: event.target.value
        });
    },
    addGist: function(event) {
        event.preventDefault();

        // When we declare this component in gist_box.js, we give it an onAdd property, which is set to the GistBox component's addGist() function.
        this.props.onAdd(this.state.username);

        // Clear the text box:
        this.setState({username: ""});
    },
    render: function() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.addGist}>
                    <input value={this.state.username} onChange={this.onChange} type="text" placeholder="Type a Github username" />
                    <button>Fetch latest Gist</button>
                </form>
            </div>
        );
    }
});
