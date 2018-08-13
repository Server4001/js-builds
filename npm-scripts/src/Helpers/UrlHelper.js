"use strict";

const $ = require('jquery');

const UrlHelper = (function() {
    return {
        hitEndpoint(url) {
            console.log(`Hitting: ${url}`);

            return new Promise(function(resolve, reject) {
                $.ajax({
                    url: url,
                    type: 'get'
                }).done(function(data) {
                    resolve(data);
                }).fail(function(jqXHR) {
                    reject(Error(`Request failed: ${jqXHR.status} ${jqXHR.statusText}`));
                });
            });
        },

        async hitHome() {
            const json = await this.hitEndpoint('/');
            console.log(json);
        }
    };
})();

module.exports = UrlHelper;
