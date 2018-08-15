import {Calculator} from './Calculator';

window.Initializer = (function() {
    return {
        calculator: null,

        init() {
            this.calculator = Calculator;
            this.calculator.init();
            console.log(this.calculator.add());
            this.calculator.logNumbers();
        }
    };
})();
