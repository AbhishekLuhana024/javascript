{
  "div1"={
    "students": ["Alice", "Charlie", "Bob"]
  },
  "div2"={
    "students": ["David", "Eve", "Frank"]
  }
}

const combinedStudents = [...div1.students, ...div2.students].sort();
console.log(combinedStudents);