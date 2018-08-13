"use strict";

//noinspection JSUnusedLocalSymbols
const React = require('react');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const browserHistory = require('react-router').browserHistory;
const Redirect = require('react-router').Redirect;

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={require('./components/app')}>

            {/* Generic pages. */}
            <IndexRoute component={require('./components/home/homePage')}/>
            <Route path="about" component={require('./components/about/aboutPage')}/>

            {/* Authors. */}
            <Route path="authors" component={require('./components/authors/authorPage')}/>
            <Route path="authors/add" component={require('./components/authors/addAuthorPage')}/>
            <Route path="authors/:authorId" component={require('./components/authors/editAuthor')}/>

            {/* Redirects for about. */}
            <Redirect from="about-us" to="about"/>
            <Redirect from="about/*" to="about"/>

            {/* This should be last. Precedence matters. */}
            {/* If this comes before the redirect, then /about-us shows the missing page, not the redirect. */}
            <Route path="*" component={require('./components/common/missingPage')}/>
        </Route>
    </Router>
);
