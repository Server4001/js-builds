"use strict";

const React = require('react');
const Link = require('react-router').Link;

class Header extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <nav className="navbar navbar-default" id="js-navMenu">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/img/logo.png" alt="logo"/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Header;
