"use strict";

const React = require('react');
const Header = require('./common/header');

class App extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object
};

module.exports = App;
