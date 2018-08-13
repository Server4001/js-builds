var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
        var displayTask = (task) => React.createElement("li", null, task);

        return (
            React.createElement("ul", null, 
                 this.props.items.map(displayTask) 
            )
        );
    }
});
