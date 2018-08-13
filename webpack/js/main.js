const NumbersController = require('./Controllers/NumbersController');
const UrlHelper = require('./Helpers/UrlHelper');
const jQuery = require('jquery');

// Load styles.
require('../scss/main.scss');

async function doSomething(event) {
    event.preventDefault();

    let json = await UrlHelper.hitEndpoint('/');

    $('#txtOutput').val(json);
}

jQuery(document).ready(function() {
    NumbersController.main();

    $('#btnHitEndpoint').click(doSomething);
});
