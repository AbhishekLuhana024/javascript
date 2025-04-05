// write a script to define two jason objects named div1 and div2 having an array to store name of students, these names should be sorted alphabetically and should be displayed in console

{
    "div1"={
        "students":["Alice", "Charlie", "Bob"]
    },
    "div2"={
        "students":["David", "Eve", "Frank"]
    }
}
    const combinedStudents = [...div1.students, ...div2.students].sort();
    console.log(combinedStudents);