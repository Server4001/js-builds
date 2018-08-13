class PrintSize extends React.Component {
    constructor(props) {
        super(props);
    }

    switchCropRectangle(event) {
        this.props.changeAspectRatio(21, 22);
    }

    render() {
        return (
            <div>
                <button onClick={this.switchCropRectangle.bind(this)}>Change to 21/22</button>
            </div>
        );
    }
}
