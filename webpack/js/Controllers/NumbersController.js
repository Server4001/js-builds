const NumbersHelper = require('../Helpers/NumbersHelper');
const jQuery = require('jquery');

const NumbersController = (function($) {
    return {
        main() {
            $('#btnSubmit').click(this.buttonHandler);
        },
        buttonHandler(event) {
            event.preventDefault();

            let inputNumber = parseInt($('#txtInput').val());

            if (isNaN(inputNumber)) {
                inputNumber = 0;
            }

            $('#txtOutput').val(NumbersHelper.addTwo(NumbersHelper.getFive() + inputNumber));
        }
    };
})(jQuery);

module.exports = NumbersController;
