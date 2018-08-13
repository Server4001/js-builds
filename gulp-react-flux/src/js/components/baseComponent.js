"use strict";

const React = require('react');

class BaseComponent extends React.Component {
    handleMethodBindings(...methodNames) {
        methodNames.forEach(
            (method) => {
                this[method] = this[method].bind(this);
            }
        );
    }
}

module.exports = BaseComponent;
