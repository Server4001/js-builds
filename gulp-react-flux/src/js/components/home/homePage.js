"use strict";

const React = require('react');
const Link = require('react-router').Link;

class Home extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div className="jumbotron">
                <h1>Hello From React!</h1>
                <p>This is another line of text.</p>
                <Link to="about" className="btn btn-lg btn-primary">Learn More</Link>
            </div>
        );
    }
}

module.exports = Home;
