// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        console.log(`Today we are learning about ${this.subject}.`); 
    }
    //grade(student, subject) {
    grade(student, subject) {
        // const {student, subject} = obj
        console.log(`${student.name} receives a perfect score on ${subject}.`);
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
        let i = this.favSubject.join("\n")
        console.log(i)
    }
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClass = PMAttributes.gradClass;
        this.favInstructor = PMAttributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    favSubject: 'CSS',
  });

  const liz = new ProjectManager({
    name: 'Liz',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    favInstructor: `Josh`,
    listsSubjects: `CSS, Javascript, HTML`,
    favSubject: 'CSS',
  });


const sean = new Student({
    name: 'Sean',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    specialty: 'JavaScript',
    previousBackground: 'sales',
    className: `yo yo`,
    favSubject: 'CSS',
  });


  console.log(sean.favSubject);
  console.log(liz.favInstructor);
  console.log(josh.specialty);
  console.log(sean.location);
 

  josh.speak();
  josh.demo('variables');
  

liz.speak();


sean.speak();
josh.demo('Redux');
josh.grade(sean, 'const vs let');
liz.debugsCode(sean, 'DS-Algos');
liz.standUp('#Code-Allstars');