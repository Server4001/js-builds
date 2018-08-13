class Cropper extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.aspectRatio !== nextProps.aspectRatio) {
            // TODO : This is where we would call the Cropper.js setAspectRatio method.
            console.log(`Aspect ratio has changed from ${this.props.aspectRatio} to ${nextProps.aspectRatio}`);
        }
    }

    render() {
        return (
            React.createElement("div", null

            )
        );
    }
}
