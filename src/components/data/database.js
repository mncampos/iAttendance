const disciplines = {
  course: [
    {
      courseId: "INF01043",
      courseName: "Interação Humano-Computador",
      courseSchedule: "Terças, Quintas"

    },
    {
      courseId: "INF01048",
      courseName: "Inteligência Artificial",
      courseSchedule: "Segundas, Quartas"

    },
  ],
};


const disciplineMap = new Map();
disciplineMap.set('INF01043', disciplines.course[0]);
disciplineMap.set('INF01048', disciplines.course[1]);

const users = {
  alunos: [
    {
      id: 1,
      name: "Lucas Silveira",
      email: "lucasgsilveira@inf.ufrgs.br",
      password: "123456",
      disciplines: [disciplines.course[0], disciplines.course[1]],
    },
    {
      id: 2,
      name: "Mateus Nunes",
      email: "mateus.nunes@inf.ufrgs.br",
      password: "123456",
      disciplines: [disciplines.course[0], disciplines.course[1]],
    },
    {
      id: 3,
      name: "Richard Leal",
      email: "richard.leal@inf.ufrgs.br",
      password: "123456",
      disciplines: [disciplines.course[0], disciplines.course[1]],
    },
    {
      id: 4,
      name: "Carlos El Debugador",
      email: "a",
      password: "a",
      disciplines: [disciplines.course[0], disciplines.course[1]],
    },
  ],
  professores: [
    {
      id: 9999,
      name: "Anderson Maciel",
      email: "anderson.maciel@inf.ufrgs.br",
      password: "123456",
      disciplines: [disciplines.course[0]],
    },
    {
      id: 9998,
      name: "Leandro Wives",
      email: "lwives@inf.ufrgs.br",
      password: "123456",
      disciplines: [disciplines.course[1]],
    },
  ],
};

const usersMap = new Map();
usersMap.set(1, users.alunos[0]);
usersMap.set(2, users.alunos[1]);
usersMap.set(3, users.alunos[2]);
usersMap.set(4, users.alunos[3]);
usersMap.set(9999, users.professores[0]);
usersMap.set(9998, users.professores[1]);



const classes = {
  turmas : [
    {
      discipline: disciplineMap.get('INF01043'),
      teacher: usersMap.get(9999),
      students: [usersMap.get(1), usersMap.get(2), usersMap.get(3)],
      timetable: '10h30 - 12h10' 
    },
    {
      discipline: disciplineMap.get('INF01048'),
      teacher: usersMap.get(9998),
      students: [usersMap.get(2), usersMap.get(3), usersMap.get(4)],
      timetable: '08h30 - 10h10' 
    }
  ]
}


export { users, disciplines, classes };
