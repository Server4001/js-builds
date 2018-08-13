"use strict";

const React = require('react');
const Link = require('react-router').Link;

class MissingPage extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Page Not Found</h1>
                </div>
                <p>
                    <Link to="/" className="btn btn-lg btn-primary">Back to Home</Link>
                </p>
            </div>
        );
    }
}

module.exports = MissingPage;
