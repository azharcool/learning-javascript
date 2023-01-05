class Student {
  constructor(n, courses) {
    console.log("student constructor", n, courses);
    this.studName = n;
    this.courses = courses;
  }

  getName() {
    return `student Name: ${this.studName}`;
  }

  getStudentDetail() {
    return `student Name: ${this.studName}, courses Name: ${this.courses}        
    `;
  }

  setName(name) {
    this.studName = name;
  }
}

// const student = new Student("pranali", ["c", "c++"]); // instance of object

// console.log(student.getName());
// console.log(student.getStudentDetail());
// student.setName("P Kedar");
// console.log(student);

class CEO extends Student {
  constructor(name, courses = [], ceoName) {
    super(name, courses);
    this.ceoName = ceoName;
  }

//   override
  getName() {
    return this.ceoName;
  }
}

const ceo = new CEO("p kedar", ["html"], "azhar");

console.log(ceo);
