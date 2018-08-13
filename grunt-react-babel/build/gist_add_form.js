"use strict";

var GistAddForm = React.createClass({ displayName: "GistAddForm",
    getInitialState: function getInitialState() {
        return {
            username: ""
        };
    },
    onChange: function onChange(event) {
        this.setState({
            username: event.target.value
        });
    },
    addGist: function addGist(event) {
        event.preventDefault();

        // When we declare this component in gist_box.js, we give it an onAdd property, which is set to the GistBox component's addGist() function.
        this.props.onAdd(this.state.username);

        // Clear the text box:
        this.setState({ username: "" });
    },
    render: function render() {
        return React.createElement("div", null, React.createElement("form", { className: "form-inline", onSubmit: this.addGist }, React.createElement("input", { value: this.state.username, onChange: this.onChange, type: "text", placeholder: "Type a Github username" }), React.createElement("button", null, "Fetch latest Gist")));
    }
});
//# sourceMappingURL=gist_add_form.js.map
