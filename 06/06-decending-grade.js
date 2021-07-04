

function descGrade(students) {
  return students.sort((a, b) => a.grade > b.grade).forEach(student => console.log(student));
}

const students = [
  {
    name: '홍길동',
    grade: 90,
  },
  {
    name: '아버지',
    grade: 70,
  },
  {
    name: '어머니',
    grade: 100,
  },
]

descGrade(students);