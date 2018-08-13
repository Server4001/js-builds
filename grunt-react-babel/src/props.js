var Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            path: "http://bit.ly/1InbFvp"
        };
    },
    render: function() {
        return (
            <div>
                <a href={this.props.path} target="_blank">
                    <img src={this.props.path}/>
                </a>
            </div>
        );
    }
});
React.render(<Avatar/>, document.body);

// An example of setting the props differently:
//var AnotherExample = React.createClass({
//    render: function() {
//        return (
//            <div>
//                <span>{this.props.content}</span>
//            </div>
//        );
//    }
//});
//React.render(<AnotherExample content="This is some content"/>, document.body);
