class MethodBindingsExampleOne extends React.Component {
    constructor(props) {
        super(props);

        // Instead of binding this to the zoom method all over the place, just do it once in the constructor.
        this.zoom = this.zoom.bind(this);
    }

    zoom(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <input type="range" id="rngZoom" min="1" max="50" value={this.state.zoom} onChange={this.zoom}
                           onInput={this.zoom} />
                </div>
            </div>
        );
    }
}

// If you find that you are doing this multiple times in a class, in multiple different classes, you can abstract this
// behavior to a base component:
class BaseComponent extends React.Component {
    handleMethodBindings(...methodNames) {
        methodNames.forEach(
            (methodName) => this[methodName] = this[methodName].bind(this)
        );
    }
}
class MethodBindingsExampleTwo extends BaseComponent {
    constructor(props) {
        super(props);

        this.handleMethodBindings(
            "zoomIn",
            "zoomOut"
        );
    }

    zoomIn(event) {
        console.log(event.target.value);
    }

    zoomOut(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    ...
                </div>
            </div>
        );
    }
}
