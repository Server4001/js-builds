const jQuery = require('jquery');

jQuery(document).ready(function($) {
    $('#btnLogin').click((event) => {
        event.preventDefault();

        $('#txtOutput').val('You are now logged in!');
    });
});
