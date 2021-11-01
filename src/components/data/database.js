const disciplines = {
  course: [
    {
      courseId: "INF01043",
      courseName: "Interação Humano-Computador",
      courseSchedule: "Terças, Quintas",
    },
    {
      courseId: "INF01048",
      courseName: "Inteligência Artificial",
      courseSchedule: "Segundas, Quartas",
    },
    {
      courseId: "INF01202",
      courseName: "Algoritmos e Programação",
      courseSchedule: "Segundas, Quartas, Quintas",
    },
    {
      courseId: "MAT01353",
      courseName: "Cálculo e Geometria Analítica I",
      courseSchedule: "Segundas, Quartas, Sextas",
    },
    {
      courseId: "INF01107",
      courseName: "	Introdução à Arquitetura de Computadores",
      courseSchedule: "Terças, Quintas",
    },
    {
      courseId: "MAT01375",
      courseName: "Matemática Discreta",
      courseSchedule: "Segundas, Quartas",
    },
    {
      courseId: "INF01203",
      courseName: "Estruturas de Dados",
      courseSchedule: "Terças, Quintas"
    },
    
    
  ],
};

const disciplineMap = new Map();
disciplineMap.set("INF01043", disciplines.course[0]);
disciplineMap.set("INF01048", disciplines.course[1]);
disciplineMap.set("INF01202", disciplines.course[2]);
disciplineMap.set("MAT01353", disciplines.course[3]);
disciplineMap.set("INF01107", disciplines.course[4]);
disciplineMap.set("MAT01375", disciplines.course[5]);
disciplineMap.set("INF01203", disciplines.course[6]);

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
    {
      id: 5,
      name: "Godofredo, O Disciplinado",
      email: "b",
      password: "b",
      disciplines: [disciplines.course[0], disciplines.course[1], disciplines.course[2], disciplines.course[3], disciplines.course[4], disciplines.course[5]],
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
  turmas: [
    {
      discipline: disciplineMap.get("INF01043"),
      teacher: usersMap.get(9999),
      students: [usersMap.get(1), usersMap.get(2), usersMap.get(3)],
      timetable: "10h30 - 12h10",
    },
    {
      discipline: disciplineMap.get("INF01048"),
      teacher: usersMap.get(9998),
      students: [usersMap.get(2), usersMap.get(3), usersMap.get(4)],
      timetable: "08h30 - 10h10",
    },
  ],
};

function getUser(email){
    for(let i =0; i < users.alunos.length; i++)
    {
        if(email == users.alunos[i].email)
            return users.alunos[i];
    }
}

export { users, disciplines, classes, getUser };
