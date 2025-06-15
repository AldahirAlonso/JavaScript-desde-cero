const greeting = function (name) {
    return 'Hi, ${name}'
}

// Arrow function - explicit return

const newGreeting = (name) => {
    return 'Hi, ${name}'
}

// Arrow function - implicit return

const newGreetingImplicit = name => 'Hi, ${name}'
const newGreetingImplicitWithTwoParameters = (name, lastName) => 'Hi, Im ${name} ${lastName}'

// Lexical Binding

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great power comes great resposibility.')
fictionalCharacter.messageWithArrowFunction('Beware of the green goblin!')