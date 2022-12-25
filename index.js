// Your code here
class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says woof!`
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says meow!`
  }
}

class Bird {
  constructor(name) {
    this.name = name;
  }

  speak() {
      return `${'It\'s me! Pablo, the parrot!',this.name} says squawk!`
    }
  }