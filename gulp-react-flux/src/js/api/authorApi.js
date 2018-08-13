"use strict";

const fetch = window.fetch;

module.exports = {

    /**
     * @param {function} callback
     */
    getAllAuthors(callback) {
        fetch('/authors/v1', { method: 'get' }).then((res) => {
            return res.json();
        }).then((body) => {
            callback(undefined, body.data.authors);
        }).catch((err) => {
            callback(err, undefined);
        });
    },

    /**
     * @param {string} id - The id of the author object in the data store.
     *
     * @param {function} callback
     */
    getAuthorById(id, callback) {
        fetch(`/authors/v1/${id}`, { method: 'get' }).then((res) => {
            return res.json();
        }).then((body) => {
            callback(undefined, body.data.author);
        }).catch((err) => {
            callback(err, undefined);
        });
    },

    /**
     * @param {object} author
     * @property {string} firstName
     * @property {string} lastName
     *
     * @param {function} callback
     */
    createAuthor(author, callback) {
        fetch('/authors/v1', {
            method: 'post',
            body: JSON.stringify(author),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((body) => {
            if (body.status !== 'success') {
                return callback(Error(body.data.message), undefined);
            }

            return callback(undefined, body.data.author);
        }).catch((err) => {
            callback(err, undefined);
        });
    },

    /**
     * @param {object} author
     * @property {string} _id
     * @property {string} firstName
     * @property {string} lastName
     *
     * @param {function} callback
     */
    updateAuthor(author, callback) {
        fetch(`/authors/v1/${author._id}`, {
            method: 'put',
            body: JSON.stringify({
                firstName: author.firstName,
                lastName: author.lastName
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((body) => {
            if (body.status !== 'success') {
                return callback(Error(body.data.message));
            }

            return callback(undefined);
        }).catch((err) => {
            callback(err);
        });
    },

    /**
     * @param {string} id - The id of the author in the data store.
     * @param {function} callback
     */
    deleteAuthor(id, callback) {
        fetch(`/authors/v1/${id}`, { method: 'delete' }).then((res) => {
            if (res.status === 204) {
                callback(undefined);

                return;
            }

            res.json().then((body) => {
                callback(Error(body.data.message));
            });
        }).catch((err) => {
            callback(err);
        });
    }
};
