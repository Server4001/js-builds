var React = require('react');

class MyComponentOne extends React.Component {
    constructor(props) {
        super(props);
    }

    myFunc() {
        console.log("TEST");
    }

    componentDidMount() {
        console.log("hooray");
    }

    render() {
        return (
            <div>
                <span>This is MyComponentOne</span>
                <button onClick={this.myFunc.bind(this)}>ClickMe!!!</button>
            </div>
        );
    }
}

module.exports = MyComponentOne;
