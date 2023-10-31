function filterStudentsAbove80Percent(students) {
    const filteredStudents = [];
  
    for (let i = 0; i < students.length; i++) {
      if (students[i].marks > 80) {
        filteredStudents.push(students[i]);
      }
    }
  
    return filteredStudents;
  }
  
  // Example usage:
  const students = [
    { name: 'Alice', marks: 75 },
    { name: 'Bob', marks: 90 },
    { name: 'Charlie', marks: 85 },
    { name: 'David', marks: 78 },
    { name: 'Eve', marks: 92 },
  ];
  
  const above80PercentStudents = filterStudentsAbove80Percent(students);
  console.log(above80PercentStudents);
  