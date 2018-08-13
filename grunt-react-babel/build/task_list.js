"use strict";

var TaskList = React.createClass({ displayName: "TaskList",
    render: function render() {
        var displayTask = function displayTask(task) {
            return React.createElement("li", null, task);
        };

        return React.createElement("ul", null, this.props.items.map(displayTask));
    }
});
//# sourceMappingURL=task_list.js.map
