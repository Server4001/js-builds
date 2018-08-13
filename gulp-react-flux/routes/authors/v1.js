'use strict';

const express = require('express');
const router = express.Router();
const Author = require('../../models/author');
const jsendHelper = require('../../lib/helpers/jsend');

module.exports = (app) => {

    router.route('/')

    // GET /authors/v1 - List Authors.
        .get((req, res) => {

            // Find all authors.
            Author.find((err, authors) => {

                if (err) {
                    console.error(err);

                    return jsendHelper.error(res, { message: 'Unable to find all authors. ' + err });
                }

                return jsendHelper.success(res, { authors });
            });
        })

        // POST /authors/v1 - Create Author.
        .post((req, res) => {

            let errors = {};
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;

            // Validate POST payload.
            if (!firstName) {
                errors.firstName = 'First name must be a non-empty string.';
            }
            if (!lastName) {
                errors.lastName = 'Last name must be a non-empty string.';
            }
            if (Object.keys(errors).length) {

                // There are one or more errors in the POST payload.
                return jsendHelper.fail(res, { errors, message: 'Validation errors occurred.' });
            }

            // Create the author.
            const author = new Author({ firstName, lastName });

            author.save((err) => {
                if (err) {
                    console.error(err);

                    return jsendHelper.error(res, { message: 'Unable to save author to database. ' + err });
                }

                res.append('Location', `${req.urlFull}/${author.id}`);

                return jsendHelper.success(res, { author }, 201);
            });
        });

    // Disable delete all authors route in production environments.
    if (app.get('config.json').allow_delete_all_authors) {

        // DELETE /authors/v1 - Delete All Authors.
        router.delete('/', (req, res) => {
            Author.remove({}, (err) => {
                if (err) {
                    console.error(err);

                    return jsendHelper.error(res, { message: 'Unable to delete all authors. ' + err });
                }

                return jsendHelper.success(res, {}, 204);
            });
        });
    }

    // Define callback for updating a single author by id.
    const updateAuthorCallback = (req, res) => {

        // Find the author by id.
        Author.findById(req.params.author_id, (err, author) => {
            if (err) {
                return jsendHelper.fail(res, { message: 'Cannot find author. ' + err }, 404);
            }

            if (req.body.firstName) {
                author.firstName = req.body.firstName;
            }
            if (req.body.lastName) {
                author.lastName = req.body.lastName;
            }

            author.save((err) => {
                if (err) {
                    console.error(err);

                    return jsendHelper.error(res, { message: 'Unable to save author to database. ' + err });
                }

                return jsendHelper.success(res, { author });
            });
        });
    };

    router.route('/:author_id')

        // GET /authors/v1/:author_id - Get Author.
        .get((req, res) => {

            // Find the author by id.
            Author.findById(req.params.author_id, (err, author) => {
                if (err || author === null) {
                    return jsendHelper.fail(res, { message: 'Cannot find author.' }, 404);
                }

                return jsendHelper.success(res, { author });
            });
        })

        // PUT /authors/v1/:author_id - Update Author.
        .put(updateAuthorCallback)

        // PATCH /authors/v1/:author_id - Update Author.
        .patch(updateAuthorCallback)

        // DELETE /authors/v1/:author_id - Remove Author.
        .delete((req, res) => {
            Author.remove({
                _id: req.params.author_id
            }, (err, author) => {
                if (err) {
                    return jsendHelper.fail(res, { message: 'Unable to delete author from database. ' + err }, 404);
                }

                return jsendHelper.success(res, {}, 204);
            });
        });

    return router;
};
