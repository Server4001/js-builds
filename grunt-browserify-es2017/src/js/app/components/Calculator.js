import {Number} from '../models/Number';

export let Calculator = (function() {

    return {

        num1: null,
        num2: null,

        init() {
            this.num1 = new Number();
            this.num2 = new Number();
        },

        add() {
            return this.num1.add(this.num2);
        },

        logNumbers() {
            console.log(this.num1.number, this.num2.number);

            // Async/await in ES2017.
            this.sayHello();
            this.sequentially();
            this.parallel();

            // String padding in ES2017.
            console.log('1'.padStart(4, '0')); // "0001"
            console.log('121'.padStart(4, '0')); // " 0121"
            console.log('1'.padEnd(4, '0')); // "1000"
            console.log('121'.padEnd(4, '0')) // "1210"
        },

        fetchTextByPromise() {
            return new Promise(resolve => {
                setTimeout(() => { resolve('es8'); }, 2000);
            });
        },

        async sayHello() {
            const externalFetchedText = await this.fetchTextByPromise();
            console.log(`Hello, ${externalFetchedText}`); // Hello, es8
        },

        async sequentially() {
            await this.sayHello();
            await this.sayHello();
        },

        async parallel() {
            await Promise.all([ this.sayHello(), this.sayHello() ]);
        }
    };
})();
