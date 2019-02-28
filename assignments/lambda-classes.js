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
    constructor(instructorAttributes) {
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return 'Today we are learning about {subject}.'; 
    }
    grade(student, subject) {
        return '{student.name} receives a perfect score on {subject}.';
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubject = studentAttributes.favSubject;
    }

    listsSubjects() {
        let i = this.favSubject.join(", ")
        console.log(x)
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

