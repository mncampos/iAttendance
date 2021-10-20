import users from './users';


//Retorna 0 se foi inválido, 1 se for aluno e 2 se for professor
export function LoginValidator( email, password)
{
    const professores = users.professor;
    const alunos = users.student;

   

    for(let i = 0; i < professores.length; i++)
    {
        if(email == professores[i].email)
        {
            if(password == professores[i].senha)
            {
                return 2;
            }
        }
    }

    for(let i = 0; i < alunos.length; i++)
    {
        if(email == alunos[i].email)
        {
            if(password == alunos[i].senha)
            {
                return 1;
            }
        }

    }

    return 0;
}