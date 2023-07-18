"use strict";

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
