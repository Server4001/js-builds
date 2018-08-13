'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Author', new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
}));
