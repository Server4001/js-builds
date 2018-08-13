"use strict";

const BaseComponent = require('../baseComponent');

class AuthorManagementPage extends BaseComponent {
    constructor(props) {
        super(props);

        this.handleMethodBindings('setAuthorState');

        this.state = {
            author: { _id: undefined, firstName: '', lastName: '' },
            errors: {}
        };
    }

    setAuthorState(event) {
        let author = this.state.author;

        author[event.target.name] = event.target.value;

        return this.setState({ author });
    }

    authorFormIsValid() {
        let errors = {};

        if (this.state.author.firstName.length < 3) {
            errors.firstName = 'First name is too short.';
        }
        if (this.state.author.lastName.length < 3) {
            errors.lastName = 'Last name is too short.';
        }

        this.setState({ errors });

        return (Object.keys(errors).length < 1);
    }
}

module.exports = AuthorManagementPage;
