"use strict";

const React = require('react');

class About extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    This application uses the following stack:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node.js</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = About;
