export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsWithUpdatedGrades = students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });

  return studentsWithUpdatedGrades;
}
