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
