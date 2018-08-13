class Wizard extends React.Component {
    constructor(props) {
        super(props);
        // Instead of providing a separate getInitialState method, you set up your own state property in the constructor.
        this.state = {
            aspectRatio: 16 / 20
        };
    }

    updateAspectRatio(width, height) {
        let aspectRatio = width / height;

        this.setState({ aspectRatio });
    }

    render() {
        return (
            React.createElement("div", null, 
                React.createElement(PrintSize, {changeAspectRatio:  this.updateAspectRatio.bind(this) }), 
                React.createElement("input", {type: "text", value: this.state.aspectRatio, readOnly: true}), 
                React.createElement(Cropper, {aspectRatio:  this.state.aspectRatio})
            )
        );
    }
}

var wizardComponent = React.render(React.createElement(Wizard, null), document.getElementById('content'));
