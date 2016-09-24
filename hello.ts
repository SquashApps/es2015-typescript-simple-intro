
/**
 * Vanilla JS function that accepts a string and prints the name
 */
function helloWorldVanillaJS() {
    console.log('Hello World');
}

helloWorldVanillaJS();

console.log(`
    ****************** PARAMETERS AND NON-NULLABLE TYPES *********************
`);

/**
 * Typescript function that accepts a string and prints the name.
 * This will throw a compiler error when you pass anything other than a string or null/undefined
 */
function helloWorldTS(name: String) {
    console.log('Hello ' + name);
}

// This would throw an error as null is not a string as of Typescript2.0, neither is undefined 
helloWorldTS(null);

// This would work fine
helloWorldTS("John Doe");

console.log(`
    ***************************** DEFAULT PARAMS AND SPREADS *******************************************
`);

function defaultParams(x: Number = 10 | undefined, y: String = 'Hi') {
    console.log(x);
    console.log(y);
}

// Will print 10, Hi
defaultParams();
// Will print 1, Hello
defaultParams(1, 'Hello');
// Will print 10, Hello
defaultParams(undefined, 'Hello');

console.log(`
    *************************************** INTERFACES and CLASSES ***************************************** 
`);

interface Barker {
    bark(): void;
}

class Animal {
    type: String;
    age: Number;
}

class Dog extends Animal implements Barker {
    name: String;
    constructor(public type: String, public age: Number) {
        super();
    }
    bark(): void {
        console.log('I am a dog and I bark');
    }

}

function initAnimal() {
    var dog = new Dog('German Shepherd', 18);
    dog.name = 'Scooby Doo';
    dog.bark();
}

initAnimal();

console.log(`
    **************************************** INTERFACE AS A CONTRACT FOR OBJECTS *****************************************
`);

interface Person{
    name: String;
    age: Number;
}

function sayHello(person: Person){
    console.log(person.name + ' says hello!');
}
// notice how intellisense works here (if you use Visual Code)
sayHello({name: 'Joe', age: 32});

console.log(`
    *********************************************************************************
`);