'use strict';

const express = require('express');
const router = express.Router();

module.exports = () => {

    // GET / - Index page.
    router.get('*', (req, res) => {
        res.render('index');
    });

    return router;
};

