var React = require('react');
var MyComponentOne = require('./MyComponentOne');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <MyComponentOne />
                </div>
            </div>
        )
    }
}

React.render(
    <Main />,
    document.getElementById('content')
);
