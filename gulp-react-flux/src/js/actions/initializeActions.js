"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const ActionTypes = require('../constants/actionTypes');

class InitializeActions {
    initApp() {
        AuthorApi.getAllAuthors((err, authors) => {
            if (err) {
                throw err;
            }

            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                data: authors
            });
        });
    }
}

module.exports = new InitializeActions();
