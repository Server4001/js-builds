"use strict";

var TaskApp = React.createClass({ displayName: "TaskApp",
    getInitialState: function getInitialState() {
        return {
            items: [],
            task: ""
        };
    },
    addTask: function addTask(event) {
        event.preventDefault();
        if (this.state.task.length < 1) {
            alert("No empty strings please!");
            return false;
        }

        // The array class's concat() method returns an array which is the original array with the new value. It does
        // not actually change the original array, it just returns what the new one would be.
        var items = this.state.items.concat(this.state.task);

        var task = "";

        this.setState({
            items: items,
            task: task // Setting this to an empty string will clear the text box, as it has been bound to that state.
        });
    },
    onChange: function onChange(event) {
        var task = event.target.value;

        this.setState({
            task: task
        });
    },
    render: function render() {
        // How to reference a different component, from within this component.
        return React.createElement("div", null, React.createElement("h1", null, "My Tasks"), React.createElement(TaskList, { items: this.state.items }), React.createElement("form", { onSubmit: this.addTask }, React.createElement("input", { type: "text", value: this.state.task, onChange: this.onChange }), React.createElement("button", null, "Add Task")));
    }
});

React.render(React.createElement(TaskApp, null), document.body);
//# sourceMappingURL=task_app.js.map
