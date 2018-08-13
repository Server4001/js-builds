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
            <div>
                <PrintSize changeAspectRatio={ this.updateAspectRatio.bind(this) } />
                <input type="text" value={this.state.aspectRatio} readOnly />
                <Cropper aspectRatio={ this.state.aspectRatio } />
            </div>
        );
    }
}

var wizardComponent = React.render(<Wizard />, document.getElementById('content'));
