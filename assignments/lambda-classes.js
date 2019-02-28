// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    }
    speak() {
        return `Hello m name is ${this.name}, I am from ${location}.`;
    }
}

class Instructor extends Person {
    constructor(personAttributes) {
        super(personAttributes)
        this.specialty = personAttributes.specialty;
        this.favLanguage = personAttributes.favLanguage;
        this.catchPhrase = personAttributes.catchPhrase;
    }

    demo(subject) {
        return 'Today we are learning about {subject}.'; 
    }
    grade(student, subject) {
        return '{student.name} receives a perfect score on {subject}';
    }
}

