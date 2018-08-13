import {Employee} from './ExampleOneEmployee';
import {SomeObject, diag} from './SomeObject';

var e = new Employee("Brice E. Bentler");
console.log(e.doWork());

console.log(SomeObject.someMethod());
console.log(diag(2, 2));
