"use strict";

const React = require('react');
const toastr = require('toastr');
const AuthorActions = require('../../actions/authorActions');
const AuthorForm = require('./authorForm');
const AuthorManagementPage = require('./authorManagementPage');
const AuthorStore = require('../../stores/authorStore');

class EditAuthor extends AuthorManagementPage {
    // Given /authors/brice-bentler?blah=whatever
    // To access query string use: this.props.location.query.blah // whatever
    // To access path use: this.props.location.pathname // /authors/brice-bentler

    constructor(props) {
        super(props);

        this.handleMethodBindings('deleteAuthor', 'updateAuthor', 'authorsChanged');

        const author = AuthorStore.getAuthorById(this.props.params.authorId);

        if (author) {
            this.state = { author: AuthorStore.getAuthorById(this.props.params.authorId) };
        }
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this.authorsChanged);
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this.authorsChanged);
    }

    authorsChanged() {
        const author = AuthorStore.getAuthorById(this.props.params.authorId);

        if (author !== null) {
            this.setState({ author });
        } else {
            toastr.error('Unable to find this author.');
        }
    }

    updateAuthor(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            toastr.error('Form validation errors.');

            return;
        }

        try {
            AuthorActions.updateAuthor(this.state.author);
        } catch (err) {
            console.error(err);
            toastr.error('An error occurred while updating your author.');

            return;
        }

        toastr.success('Author has been updated.');
        this.context.router.push('/authors');
    }

    deleteAuthor() {
        if (!confirm('Really delete this author?')) {
            return;
        }

        try {
            AuthorActions.deleteAuthor(this.state.author._id);
        } catch (err) {
            console.error(err);
            toastr.error('Unable to delete this author.');

            return;
        }

        toastr.success('Author has been deleted.');
        this.context.router.push('/authors');
    }

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                <h1>Edit Author</h1>
                <h3>ID: {this.state.author._id}</h3>
                <AuthorForm author={this.state.author}
                            inputChange={this.setAuthorState}
                            onSave={this.updateAuthor}
                            errors={this.state.errors}/>
                <button className="btn btn-danger" onClick={this.deleteAuthor}>Delete Author</button>
            </div>
        );
    }
}

EditAuthor.propTypes = {

    /**
     * @var {object} params
     * @property {string} authorId
     */
    params: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

EditAuthor.contextTypes = {
    router: React.PropTypes.object
};

module.exports = EditAuthor;
