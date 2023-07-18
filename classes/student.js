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
    return this.marks.reduce((total, mark) => total + mark, 0);
  }
}
