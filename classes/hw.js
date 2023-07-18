"use strict";

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    const sum = this.getMarksSum();
    return sum / this.marks.length;
  }

  getMarksSum() {
    return this.marks.reduce((acc, mark) => acc + mark, 0);
  }
}

class Group {
  #students = [];

  addStudent(student) {
    if (this.isStudent(student)) {
      this.#students.push(student);
    }
  }

  isStudent(student) {
    return student instanceof Student;
  }

  getAverageMark() {
    const sum = this.getAverageMarksSum();
    return sum / this.#students.length;
  }

  getAverageMarksSum() {
    let sum = 0;
    for (const student of this.#students) {
      sum += student.getAverageMark();
    }
    return sum;
  }

  get students() {
    return this.#students;
  }
}

const group = new Group();

group.addStudent(new Student("John", [10, 8]));
group.addStudent(new Student("Alex", [10, 9]));
group.addStudent(new Student("Bob", [6, 10]));

console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);

console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

console.log([6, 5, 8, 7].max());
