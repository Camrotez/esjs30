class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static fromJson(json){
    const parsed = JSON.parse(json);
    const {id, firstName, lastName, age} = parsed;
    return new Person (id, firstName, lastName, age)
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

// const fromJson = JSON.parse(json)
// console.log(fromJson);