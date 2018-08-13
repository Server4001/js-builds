"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const ActionTypes = require('../constants/actionTypes');

class AuthorActions {
    createAuthor(author) {
        AuthorApi.createAuthor(author, (err, savedAuthor) => {
            if (err) {
                throw err;
            }

            Dispatcher.dispatch({
                actionType: ActionTypes.AUTHOR_CREATE,
                data: savedAuthor
            });
        });
    }

    updateAuthor(author) {
        AuthorApi.updateAuthor(author, (err) => {
            if (err) {
                throw err;
            }

            Dispatcher.dispatch({
                actionType: ActionTypes.AUTHOR_UPDATE,
                data: author
            });
        });
    }

    deleteAuthor(authorId) {
        AuthorApi.deleteAuthor(authorId, (err) => {
            if (err) {
                throw err;
            }

            Dispatcher.dispatch({
                actionType: ActionTypes.AUTHOR_DELETE,
                data: authorId
            });
        });
    }
}

module.exports = new AuthorActions();
