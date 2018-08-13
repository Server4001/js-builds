"use strict";

const React = require('react');
const Link = require('react-router').Link;
const AuthorList = require('./authorList');
const AuthorStore = require('../../stores/authorStore');
const BaseComponent = require('../baseComponent');

class Authors extends BaseComponent {
    constructor(props) {
        super(props);

        this.handleMethodBindings('authorsChanged');

        this.state = {
            authors: AuthorStore.getAllAuthors()
        };
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this.authorsChanged);
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this.authorsChanged);
    }

    authorsChanged() {
        const authors = AuthorStore.getAllAuthors();
        this.setState({ authors });
    }

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="authors/add" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = Authors;
