class Person
{
    constructor(name)
    {
        this._name = name;
    }

    sayName()
    {
        console.log(this._name);

        return this;
    }

    getName()
    {
        return this._name;
    }

    validateName()
    {
        if (this._name.length < 1) {
            this._name = "a default name";
        }

        return this;
    }

    addToName()
    {
        return this._name + " The Person";
    }

    toString() // Overriding to string
    {
        return this._name;
    }
}

class Employee extends Person
{
    constructor(name, position)
    {
        super(name);
        this.position = position;
    }

    get position()
    { // Getter
        return this._position;
    }

    set position(position)
    { // Setter
        this._position = position;

        return this;
    }

    get positionUpper()
    { // Calculated attribute getter
        return this._position.toUpperCase();
    }

    doWork()
    {
        super.validateName();

        console.log(`My name is ${this._name} and my job title is ${this.position}.`);

        return this;
    }

    static burtTheFryCook ()
    { // Static class method
        return new Employee("Burt", "Fry Cook");
    }

    addToName() // Overriding a parent class method.
    {
        return super.addToName() + ", A Great Person.";
    }
}

let e = new Employee("Brice Bentler", "Software Engineer");
e.sayName().doWork();
console.log(e.position);
console.log(e.positionUpper);

let burt = Employee.burtTheFryCook();
burt.sayName().doWork();
burt.position = "Manager";
burt.doWork();

console.log("----------------------------------------------------");
let name = e._name;
console.log(e.getName());
console.log(e.addToName());

console.log("----------------------------------------------------");
// Overriding to string:
console.log(e.toString());

console.log("----------------------------------------------------");
// Instance of:
console.log(e instanceof Person); //> true
