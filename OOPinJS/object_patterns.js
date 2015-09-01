
// ---- (1) the module pattern

// IIFE - Immediately Invoked Function Expression
var person = (function() {
    var age = 25;

    return {
        name: "Nicholas",

        getAge: function() {
            return age;
        },

        growOlder: function() {
            age++;
        }
    };
})();

console.log(person.name);
console.log(person.getAge());

person.age = 100;  // will silently fail, "age" is a private property
console.log(person.getAge());

person.growOlder();
console.log(person.getAge());

// Revealing Module Pattern
// arranges all variables and methods at the top of the IIFE and simply assigns them
// to the returned object

var anotherPerson = (function() {
    var age = 25;

    function getAge() {
        return age;
    }

    function growOlder() {
        age++;
    }

    return {
        name: "Bob",
        getAge: getAge,
        growOlder: growOlder
    };
})();

console.log(anotherPerson.name + " - " + anotherPerson.getAge());
anotherPerson.growOlder();
console.log(anotherPerson.name + " - " + anotherPerson.getAge());


// Private members for constructors: is about using the module pattern inside of the ctor
// to create instance-specific private data.

function Person(name) {

    // define a variable only accessible inside of the Person ctor
    var age = 33;

    this.name = name;

    this.getAge = function() {
        return age;
    }

    this.growOlder = function() {
        age++;
    }
}

var terry = new Person("Terry");

console.log(terry.name + " - " + terry.getAge());
terry.growOlder();
console.log(terry.name + " - " + terry.getAge());
terry.age = 100;  // fails silently; nothing happens
console.log(terry.name + " - " + terry.getAge());

// mix-in:

function EventTarget() {
}

EventTarget.prototype = {
    constructor: EventTarget,

    addListener: function(type, listener) {
        // create an array if it doesn't exist
        if(!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }

        if(typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    },

    fire: function(event) {
        if(!event.target) {
            event.target = this;
        }

        if(!event.type) {  // falsy
            throw new Error("Event object missing 'type' property.");
        }

        if(this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for(var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this.event);
            }
        }
    },

    removeListener: function(type, listener) {
        if(this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for(var i = 0, len = listeners.length; i < len; i++) {
                if(listeners[i] === listener) {
                    listeners.splice(i,1);
                    break;
                }
            }
        }
    }
};

//var target = new EventTarget();
//target.addListener("message", function(event) {
//    console.log("Message is: " + event.data);
//});
//
//target.fire( {
//    type: "message",
//    data: "Enigmatic message"
//});

/*
var person = EventTarget.prototype;
person.name = "Nicholas";
person.sayName = function() {
    console.log(this.name);
    this.fire({ type: "namesaid", name: name});
};
*/

function Person(name) {
    this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;

Person.prototype.sayName = function() {
    console.log(this.name);
    this.fire({type: "namesaid", name: name});
};

var person = new Person("Robby");


