"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

/**
 * @type {Array}
 * @private
 */
let _authors = [];

/**
 * @param {String} authorId
 *
 * @returns {Null|Number}
 * @private
 */
const _findAuthorIndexById = function(authorId) {
    let index = null;

    for (let i in _authors) {
        if (_authors[i]._id === authorId) {
            index = i;
            break;
        }
    }

    return index;
};

class AuthorStore extends EventEmitter {
    addChangeListener(callback) {
        this.addListener(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getAllAuthors() {
        return _authors;
    }

    getAuthorById(id) {
        for (let author of _authors) {
            if (author._id === id) {
                return author;
            }
        }

        return null;
    }
}

const authorStore = new AuthorStore();

Dispatcher.register((action) => {
    switch (action.actionType) {

        case ActionTypes.INITIALIZE:
            _authors = action.data;
            authorStore.emitChange();
            break;

        case ActionTypes.AUTHOR_CREATE:
            _authors.push(action.data);
            authorStore.emitChange();
            break;

        case ActionTypes.AUTHOR_UPDATE:
            let author = action.data;
            let index = _findAuthorIndexById(author._id);

            if (index !== null) {
                _authors.splice(index, 1, author);
                authorStore.emitChange();
            }

            break;

        case ActionTypes.AUTHOR_DELETE:
            let i = _findAuthorIndexById(action.data);

            if (i !== null) {
                _authors.splice(i, 1);
                authorStore.emitChange();
            }

            break;

        default:
            break;
    }
});

module.exports = authorStore;
