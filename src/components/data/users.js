import classes from "./classes";

const users = {
  student: [
    {
      id: 1,
      name: 'Lucas Silveira',
      email: 'lucasgsilveira@inf.ufrgs.br',
      senha: '123456',
      // courses: [ class[0], class[1] ],
    },
    {
      id: 2,
      name: 'Mateus Nunes',
      email: 'mateus.nunes@inf.ufrgs.br',
      senha: '123456',
      // courses: [ classes.class[0], classes.class[1] ],
    },
    {
      id: 3,
      name: 'Richard Leal',
      email: 'richard.leal@inf.ufrgs.br',
      senha: '123456',
      // courses: [ classes.class[0], classes.class[1] ],
    },
    {
      id:69,
      name: "Carlos",
      email: "a",
      senha: "a",
    }
  ],
  professor: [
    {
      id: 4,
      name: 'Anderson Maciel',
      email: 'anderson.maciel@inf.ufrgs.br',
      senha: '123456',
      // lecture:[ classes.class[0] ],
    },
    {
      id: 5,
      name: 'Leandro Wives',
      email: 'lwives@inf.ufrgs.br',
      senha: '123456',
      // lecture:[ classes.class[1] ],
    },
  ],
}

export default users;
