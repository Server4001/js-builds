var TaskApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            task: ""
        };
    },
    addTask: function(event) {
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
            items,
            task // Setting this to an empty string will clear the text box, as it has been bound to that state.
        });
    },
    onChange: function(event) {
        var task = event.target.value;

        this.setState({
            task
        });
    },
    render: function() {
        // How to reference a different component, from within this component.
        return (
            <div>
                <h1>My Tasks</h1>
                <TaskList items={this.state.items} />

                <form onSubmit={this.addTask}>
                    <input type="text" value={this.state.task} onChange={this.onChange}/>
                    <button>Add Task</button>
                </form>
            </div>
        );
    }
});

React.render(<TaskApp/>, document.body);
