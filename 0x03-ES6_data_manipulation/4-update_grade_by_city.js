export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const grade = newGrades.find((obj) => obj.studentId === student.id);

    if (grade) {
      return {
        ...student,
        grade: grade.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
