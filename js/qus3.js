class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    introduce() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        console.log(`I am a ${this.gender} and I work as a ${this.occupation}.`);
    }
}

// Example usage:
const person1 = new Person("Ravi", 22, "male", "software engineer");
person1.introduce();

const person2 = new Person("varma", 24, "male", "doctor");
person2.introduce();
