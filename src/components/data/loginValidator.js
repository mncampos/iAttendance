import {users} from './database';


//Retorna 0 se foi inválido, 1 se for aluno e 2 se for professor
export function LoginValidator( email, password)
{

    const professores = users.professores;
    const alunos = users.alunos;

   

    for(let i = 0; i < professores.length; i++)
    {
        if(email == professores[i].email)
        {
            if(password == professores[i].password)
            {
                return 2;
            }
        }
    }

    for(let i = 0; i < alunos.length; i++)
    {
        if(email == alunos[i].email)
        {
            if(password == alunos[i].password)
            {
                return 1;
            }
        }

    }

    return 0;
}