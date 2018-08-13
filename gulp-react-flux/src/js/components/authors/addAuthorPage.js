"use strict";

const React = require('react');
const toastr = require('toastr');
const AuthorActions = require('../../actions/authorActions');
const AuthorForm = require('./authorForm');
const AuthorManagementPage = require('./authorManagementPage');

class AddAuthorPage extends AuthorManagementPage {
    constructor(props) {
        super(props);

        this.handleMethodBindings('saveAuthor');
    }

    saveAuthor(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            toastr.error('Form validation errors.');

            return;
        }

        try {
            AuthorActions.createAuthor(this.state.author);
        } catch (err) {
            console.error(err);
            toastr.error('An error occurred while saving your author.');

            return;
        }

        toastr.success('Author saved.');
        this.context.router.push('/authors');
    }

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <h1>Add Author</h1>
                <AuthorForm author={this.state.author}
                            inputChange={this.setAuthorState}
                            onSave={this.saveAuthor}
                            errors={this.state.errors}/>
            </div>
        );
    }
}

AddAuthorPage.contextTypes = {
    router: React.PropTypes.object
};

module.exports = AddAuthorPage;
