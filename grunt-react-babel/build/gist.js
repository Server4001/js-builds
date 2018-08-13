"use strict";

var Gist = React.createClass({ displayName: "Gist",
    render: function render() {
        return React.createElement("div", null, this.props.username, "'s last Gist is ", React.createElement("a", { href: this.props.url, target: "_blank" }, "here"), ".");
    }
});
//# sourceMappingURL=gist.js.map
