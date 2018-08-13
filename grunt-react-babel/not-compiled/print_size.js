class PrintSize extends React.Component {
    constructor(props) {
        super(props);
    }

    switchCropRectangle(event) {
        this.props.changeAspectRatio(21, 22);
    }

    render() {
        return (
            React.createElement("div", null, 
                React.createElement("button", {onClick: this.switchCropRectangle.bind(this)}, "Change to 21/22")
            )
        );
    }
}
