"use strict";

global.$ = global.jQuery = require('jquery');

//noinspection JSUnusedLocalSymbols
const React = require('react');
const render = require('react-dom').render;
const routes = require('./routes');
const navbarHelper = require('./helpers/navbar');
const InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

render(routes, document.getElementById('app'));

$(document).ready(function() {
    navbarHelper.addActiveClass();

    window.onhashchange = () => {
        navbarHelper.addActiveClass();
    };
});
